import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, BookOpen, Search, CheckCircle2, XCircle, Info } from 'lucide-react';
import { LEARNING_DATA } from '../../constants/learningContent';
import styles from './Learning.module.css';

const QuizItem = ({ quiz, qNumber }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (option) => {
    if (isSubmitted) return;
    setSelectedOption(option);
    setIsSubmitted(true);
  };

  const isCorrect = selectedOption === quiz.answer;

  return (
    <div className={styles.quizCard}>
      <div className={styles.quizQHeader}>
        <span className={styles.qNum}>Q{qNumber}</span>
        <h4>{quiz.question}</h4>
      </div>
      
      <div className={styles.optionsGrid}>
        {quiz.options.map((option, idx) => {
          let optionClass = styles.optionBtn;
          if (isSubmitted) {
            if (option === quiz.answer) optionClass += ` ${styles.optionCorrect}`;
            else if (option === selectedOption) optionClass += ` ${styles.optionWrong}`;
            else optionClass += ` ${styles.optionDisabled}`;
          } else if (selectedOption === option) {
            optionClass += ` ${styles.optionSelected}`;
          }

          return (
            <button 
              key={idx} 
              className={optionClass}
              onClick={() => handleOptionSelect(option)}
              disabled={isSubmitted}
            >
              {option}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}
          >
            <div className={styles.feedbackIcon}>
              {isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
            </div>
            <div className={styles.feedbackText}>
              <h5>{isCorrect ? 'Correct!' : 'Incorrect'}</h5>
              <p>{isCorrect ? quiz.explanation : quiz.wrongFeedback}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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

          <div className={styles.assessmentSection}>
            <div className={styles.assessmentHeader}>
              <BookOpen size={24} />
              <h2>Knowledge Check</h2>
            </div>
            <p className={styles.assessmentIntro}>Test your understanding of this module with 10 key questions.</p>
            
            <div className={styles.quizList}>
              {currentItem.quizzes.map((quiz, qIdx) => (
                <QuizItem key={qIdx} quiz={quiz} qNumber={qIdx + 1} />
              ))}
            </div>
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
