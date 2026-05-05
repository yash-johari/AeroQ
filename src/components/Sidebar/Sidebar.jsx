import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, BookOpen, FileText, Lightbulb, 
  ChevronRight, Sparkles, ChevronDown,
  LayoutDashboard, Settings, Zap
} from 'lucide-react';
import { LEARNING_DATA } from '../../constants/learningContent';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [learningOpen, setLearningOpen] = useState(location.pathname.startsWith('/learning'));

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Toggle Button (Open) */}
      {!isOpen && !isHomePage && (
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
                {/* Main Dashboard & Config */}
                <NavLink 
                  to="/dashboard"
                  className={({ isActive }) => 
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeSidebar}
                >
                  <span className={styles.icon}><LayoutDashboard size={20} /></span>
                  <span className={styles.name}>Dashboard</span>
                  <ChevronRight size={16} className={styles.chevron} />
                </NavLink>

                <NavLink 
                  to="/config"
                  className={({ isActive }) => 
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeSidebar}
                >
                  <span className={styles.icon}><Settings size={20} /></span>
                  <span className={styles.name}>Model Configuration</span>
                  <ChevronRight size={16} className={styles.chevron} />
                </NavLink>

                <NavLink 
                  to="/predictor"
                  className={({ isActive }) => 
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeSidebar}
                >
                  <span className={styles.icon}><Zap size={20} /></span>
                  <span className={styles.name}>Prediction</span>
                  <ChevronRight size={16} className={styles.chevron} />
                </NavLink>

                <div className={styles.divider} />

                {/* Learning Main Item */}
                <div className={styles.navGroup}>
                  <button 
                    className={`${styles.navItem} ${location.pathname.startsWith('/learning') ? styles.active : ''}`}
                    onClick={() => setLearningOpen(!learningOpen)}
                  >
                    <span className={styles.icon}><BookOpen size={20} /></span>
                    <span className={styles.name}>Learning</span>
                    <motion.div
                      animate={{ rotate: learningOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={styles.chevronWrap}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {learningOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className={styles.submenu}
                      >
                        {LEARNING_DATA.map((item) => (
                          <NavLink 
                            key={item.slug}
                            to={`/learning/${item.slug}`}
                            className={({ isActive }) => 
                              `${styles.submenuItem} ${isActive ? styles.submenuActive : ''}`
                            }
                            onClick={closeSidebar}
                          >
                            <span>{item.shortTitle}</span>
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <NavLink 
                  to="/explanation"
                  className={({ isActive }) => 
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeSidebar}
                >
                  <span className={styles.icon}><FileText size={20} /></span>
                  <span className={styles.name}>Model Explanation</span>
                  <ChevronRight size={16} className={styles.chevron} />
                </NavLink>

                <NavLink 
                  to="/recommendation"
                  className={({ isActive }) => 
                    `${styles.navItem} ${isActive ? styles.active : ''}`
                  }
                  onClick={closeSidebar}
                >
                  <span className={styles.icon}><Lightbulb size={20} /></span>
                  <span className={styles.name}>Recommendation</span>
                  <ChevronRight size={16} className={styles.chevron} />
                </NavLink>
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
