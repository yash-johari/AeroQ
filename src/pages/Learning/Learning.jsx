import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, Search } from 'lucide-react';
import { LEARNING_DATA } from '../../constants/learningContent';
import styles from './Learning.module.css';

const Learning = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const currentItem = LEARNING_DATA.find(item => item.slug === slug);

  // If no slug or invalid slug, show catalog
  if (!slug || !currentItem) {
    return (
      <div className={styles.learningPage}>
        <div className={styles.container}>
          <button className={styles.backBtn} onClick={() => navigate('/')}>
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
          
          <header className={styles.header}>
            <h1>Learning Center</h1>
            <p>Master the fundamentals of Quantum Machine Learning for Wind Forecasting</p>
          </header>

          <div className={styles.catalogGrid}>
            {LEARNING_DATA.map((item) => (
              <motion.div 
                key={item.slug}
                className={styles.catalogCard}
                onClick={() => navigate(`/learning/${item.slug}`)}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>Click to explore this module and understand the quantum mechanics behind our predictions.</p>
                <div className={styles.cardFooter}>
                  <span>Explore Module</span>
                  <Search size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.learningPage}>
      <div className={styles.container}>
        <div className={styles.topNav}>
          <button className={styles.backBtn} onClick={() => navigate('/learning')}>
            <ArrowLeft size={18} />
            <span>Learning Modules</span>
          </button>
          <button className={styles.homeMiniBtn} onClick={() => navigate('/')}>
            Home
          </button>
        </div>

        <motion.div 
          key={currentItem.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.contentWrapper}
        >
          <header className={styles.contentHeader}>
            <div className={styles.iconBig}>{currentItem.icon}</div>
            <h1>{currentItem.title}</h1>
          </header>

          <div className={styles.richContent}>
            {currentItem.content}
          </div>

          <div className={styles.navigationFooter}>
            {LEARNING_DATA.indexOf(currentItem) > 0 && (
              <button 
                className={styles.navBtn}
                onClick={() => navigate(`/learning/${LEARNING_DATA[LEARNING_DATA.indexOf(currentItem) - 1].slug}`)}
              >
                Previous Topic
              </button>
            )}
            <div style={{ flex: 1 }} />
            {LEARNING_DATA.indexOf(currentItem) < LEARNING_DATA.length - 1 && (
              <button 
                className={styles.navBtnPrimary}
                onClick={() => navigate(`/learning/${LEARNING_DATA[LEARNING_DATA.indexOf(currentItem) + 1].slug}`)}
              >
                Next Topic
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Learning;
