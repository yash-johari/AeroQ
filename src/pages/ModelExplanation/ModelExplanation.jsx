import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Cpu, FlaskConical, Timer, BarChart3, Settings2, ArrowLeft } from 'lucide-react';
import styles from './ModelExplanation.module.css';

const StatCard = ({ icon, label, value, color }) => (
  <div className={styles.statCard}>
    <div className={`${styles.iconContainer} ${styles[color]}`}>
      {icon}
    </div>
    <div className={styles.statLine}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>{value}</span>
    </div>
  </div>
);

const ModelExplanation = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.explanationPage}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>
        <header className={styles.header}>
          <h1>Model Architecture Breakdown</h1>
          <p>Technical specifications and performance benchmarking of our hybrid stack</p>
        </header>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Cpu className={styles.headerIcon} />
            <h2>Quantum Predictive Layer</h2>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>
              The quantum layer acts as the high-dimensional feature extractor. It processes non-linear relationships between atmospheric variables using variational circuits.
            </p>
            <div className={styles.tagGrid}>
              <div className={styles.tagGroup}>
                <h5>Core Parameters</h5>
                <div className={styles.tags}>
                  <span>Entanglement Strategy</span>
                  <span>Circuit Repetitions (Reps)</span>
                  <span>Feature Dimension</span>
                  <span>Qubit Count</span>
                </div>
              </div>
              <div className={styles.tagGroup}>
                <h5>Available Variants</h5>
                <div className={styles.tags}>
                  <span className={styles.blue}>VQR (Default)</span>
                  <span className={styles.blue}>QNode Native</span>
                  <span className={styles.blue}>CV-Quantum</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <FlaskConical className={styles.headerIcon} />
            <h2>Classical Regression Layer</h2>
          </div>
          <div className={styles.card}>
            <p className={styles.description}>
              Standard ML algorithms responsible for interpreting quantum outputs and mapping them to actionable wind speed predictions.
            </p>
            <div className={styles.tagGrid}>
              <div className={styles.tagGroup}>
                <h5>Model Library</h5>
                <div className={styles.tags}>
                  <span>Random Forest</span>
                  <span>Lasso (L1 Regularization)</span>
                  <span>Gradient Boosting</span>
                  <span>SVR (Support Vector)</span>
                </div>
              </div>
              <div className={styles.tagGroup}>
                <h5>Hyperparameters</h5>
                <div className={styles.tags}>
                  <span>Learning Rate</span>
                  <span>Max Depth</span>
                  <span>Estimator Count</span>
                  <span>Alpha (Penalty)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benchmarks}>
          <div className={styles.sectionHeader}>
            <BarChart3 className={styles.headerIcon} />
            <h2>Performance Benchmarks</h2>
          </div>
          <div className={styles.statsGrid}>
            <StatCard 
              icon={<Timer size={24} />} 
              label="Avg. Training Time" 
              value="14.2s / Epoch" 
              color="orange"
            />
            <StatCard 
              icon={<Settings2 size={24} />} 
              label="Quantum Depth" 
              value="Stage-4" 
              color="blue"
            />
            <StatCard 
              icon={<BarChart3 size={24} />} 
              label="Target RMSE" 
              value="0.124" 
              color="green"
            />
          </div>

          <div className={styles.tableCard}>
            <h3>Metric Comparison</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Model Variant</th>
                  <th>Complexity</th>
                  <th>Training Time</th>
                  <th>RMSE Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pure Classical (Baseline)</td>
                  <td>Low</td>
                  <td>2s</td>
                  <td>0.45</td>
                </tr>
                <tr>
                  <td>VQR + Random Forest</td>
                  <td>Medium</td>
                  <td>18s</td>
                  <td>0.21</td>
                </tr>
                <tr className={styles.activeRow}>
                  <td>AeroQ Hybrid (VQR + Gradient)</td>
                  <td>High</td>
                  <td>45s</td>
                  <td>0.12</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelExplanation;
