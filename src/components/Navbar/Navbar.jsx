import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Wind, User, LogOut, Settings, ChevronDown, Settings2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Wind className={styles.logoIcon} />
          <span>AeroQ</span>
        </Link>

        <div className={styles.navLinks}>
          {!isDashboard ? (
            <Link to="/auth" className={styles.authButton}>
              Login / Signup
            </Link>
          ) : (
            <div 
              className={styles.profileContainer}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <div className={styles.profileTrigger}>
                <div className={styles.avatar}>Y</div>
                <span>Yash Johari</span>
                <ChevronDown size={16} />
              </div>
              
              {showDropdown && (
                <div className={styles.dropdown}>
                  <Link to="/profile" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>
                    <User size={16} />
                    <span>Profile</span>
                  </Link>
                  <Link to="/update" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>
                    <Settings size={16} />
                    <span>Update</span>
                  </Link>
                  <Link to="/config" className={styles.dropdownItem} onClick={() => setShowDropdown(false)}>
                    <Settings2 size={16} />
                    <span>Configure Model</span>
                  </Link>
                  <button className={styles.dropdownItem} onClick={() => window.location.href = '/'}>
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
