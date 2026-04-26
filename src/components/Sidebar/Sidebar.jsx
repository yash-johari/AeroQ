import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, BookOpen, FileText, Lightbulb, 
  ChevronRight, Sparkles
} from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const navItems = [
    { name: 'Learning', path: '/learning', icon: <BookOpen size={20} /> },
    { name: 'Model Explanation', path: '/explanation', icon: <FileText size={20} /> },
    { name: 'Recommendation', path: '/recommendation', icon: <Lightbulb size={20} /> },
  ];

  return (
    <>
      {/* Toggle Button (Open) */}
      {!isOpen && (
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
          <Menu size={24} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
            />

            {/* Sidebar Container */}
            <motion.div 
              className={styles.sidebar}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <button className={styles.closeBtn} onClick={closeSidebar}>
                <X size={24} />
              </button>

              <nav className={styles.nav}>
                {navItems.map((item) => (
                  <NavLink 
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => 
                      `${styles.navItem} ${isActive ? styles.active : ''}`
                    }
                    onClick={closeSidebar}
                  >
                    <span className={styles.icon}>{item.icon}</span>
                    <span className={styles.name}>{item.name}</span>
                    <ChevronRight size={16} className={styles.chevron} />
                  </NavLink>
                ))}
              </nav>

              <div className={styles.sidebarFooter}>
                <p>© 2026 AeroQ Analytics</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
