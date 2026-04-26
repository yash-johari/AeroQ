import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, BookOpen, Layers, Zap, FlaskConical, ArrowLeft } from 'lucide-react';
import styles from './Learning.module.css';

const AccordionItem = ({ title, icon, isOpen, onClick, children }) => {
  return (
    <div className={styles.accordionItem}>
      <button 
        className={`${styles.accordionHeader} ${isOpen ? styles.open : ''}`}
        onClick={onClick}
      >
        <span className={styles.iconWrapper}>{icon}</span>
        <span className={styles.title}>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={styles.accordionContent}
          >
            <div className={styles.innerContent}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Learning = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  };

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

        <div className={styles.accordion}>
          <AccordionItem 
            title="Introduction to Quantum Machine Learning (QML)" 
            icon={<BookOpen size={20} />}
            isOpen={activeIndex === 0}
            onClick={() => toggleAccordion(0)}
          >
            <p>Quantum Machine Learning (QML) is an emerging field that combines the principles of quantum physics with traditional machine learning techniques.</p>
            <p>At its core, QML leverages quantum bits (qubits) and quantum gates to process information in ways that classical computers cannot easily replicate. For wind forecasting, this means high-dimensional spatial pattern recognition and complex environmental variable correlation processing.</p>
            <ul>
              <li><strong>Superposition:</strong> Processing multiple states simultaneously.</li>
              <li><strong>Entanglement:</strong> Creating correlations between parameters that classical systems miss.</li>
              <li><strong>Speed:</strong> Potentially exponential speedup for specific large-scale predictive tasks.</li>
            </ul>
          </AccordionItem>

          <AccordionItem 
            title="Overview of QML Models" 
            icon={<Layers size={20} />}
            isOpen={activeIndex === 1}
            onClick={() => toggleAccordion(1)}
          >
            <div className={styles.grid}>
              <div className={styles.card}>
                <h4>VQR (Variational Quantum Regressor)</h4>
                <p>Designed for continuous value prediction, VQR is our main engine for estimating wind speeds. It uses a parameterized quantum circuit as a hypothesis function.</p>
              </div>
              <div className={styles.card}>
                <h4>VQC (Variational Quantum Classifier)</h4>
                <p>Used for categorical data, such as classifying wind states (Low, Moderate, High, Extreme) before regressing the exact speed values.</p>
              </div>
              <div className={styles.card}>
                <h4>QNN (Quantum Neural Network)</h4>
                <p>A hybrid structure where quantum layers are integrated into a larger neural network architecture, allowing for end-to-end differentiable learning.</p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="Key Parameters Explained" 
            icon={<Zap size={20} />}
            isOpen={activeIndex === 2}
            onClick={() => toggleAccordion(2)}
          >
            <div className={styles.paramItem}>
              <h5>Feature Map</h5>
              <p>Translates classical data (like pressure and temperature) into a quantum state. It determines how effectively the quantum processor "sees" the wind data.</p>
            </div>
            <div className={styles.paramItem}>
              <h5>Ansatz</h5>
              <p>The variational circuit structure. Think of this as the "architecture" of the quantum neural network. Different ansatz types are better for different atmospheric patterns.</p>
            </div>
            <div className={styles.paramItem}>
              <h5>Optimizer</h5>
              <p>The algorithm that tunes the parameters of the quantum circuit. It bridges the gap between quantum processing and classical gradient descent.</p>
            </div>
          </AccordionItem>

          <AccordionItem 
            title="The Hybrid Approach: Quantum + Classical" 
            icon={<FlaskConical size={20} />}
            isOpen={activeIndex === 3}
            onClick={() => toggleAccordion(3)}
          >
            <p>AeroQ doesn't rely solely on quantum hardware. We use a <strong>Hybrid Quantum-Classical</strong> strategy.</p>
            <p>Data is pre-processed using classical techniques (Normalization, Lag creation), passed through a Quantum Feature Map for high-dimensional projection, processed by a Quantum Ansatz, and then post-processed by a Classical Regressor (like Lasso or Random Forest).</p>
            <div className={styles.diagram}>
              <div className={styles.node}>Classical Prefilter</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.node}>Quantum Feature Engine</div>
              <div className={styles.arrow}>→</div>
              <div className={styles.node}>Classical Output Layer</div>
            </div>
          </AccordionItem>
        </div>
      </div>
    </div>
  );
};

export default Learning;
