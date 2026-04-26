import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Lightbulb, CheckCircle2, AlertCircle, Info, Table as TableIcon, ArrowLeft } from 'lucide-react';
import styles from './Recommendation.module.css';

const Recommendation = () => {
  const navigate = useNavigate();
  const recommendations = [
    {
      type: 'Classical Model',
      name: 'Random Forest Regressor',
      suitability: 'High Stability',
      reason: 'Best for datasets with high variability and many missing sensor nodes.',
      features: ['Robust to outliers', 'Excellent for long-term trends']
    },
    {
      type: 'Hybrid Model',
      name: 'AeroQ Hybrid (VQR + SVR)',
      suitability: 'Peak Precision',
      reason: 'Recommended for ultra-short term predictions (Next 1-4 hours).',
      features: ['Quantum-enhanced feature extraction', 'Low RMSE in localized regions']
    }
  ];

  const trialResults = [
    { date: '2026-04-15', model: 'Hybrid-A', accuracy: '94.2%', speed: '12km/h' },
    { date: '2026-04-16', model: 'Classical-B', accuracy: '88.5%', speed: '14km/h' },
    { date: '2026-04-17', model: 'Hybrid-C', accuracy: '96.1%', speed: '11km/h' },
  ];

  return (
    <div className={styles.recommendationPage}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>
        <header className={styles.header}>
          <h1>Intelligence & Recommendations</h1>
          <p>Automated insights based on your specific meteorological problem statements</p>
        </header>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <AlertCircle className={styles.headerIcon} />
            <h2>Problem Context</h2>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.problemItem}>
              <span className={styles.label}>Selected Variable:</span>
              <span className={styles.value}>Surface Wind Speed (10m)</span>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.label}>Data Periodicity:</span>
              <span className={styles.value}>Hourly Sensor Logs</span>
            </div>
            <div className={styles.problemItem}>
              <span className={styles.label}>Regional Terrain:</span>
              <span className={styles.value}>Offshore Coastal</span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Lightbulb className={styles.headerIcon} />
            <h2>Suggested Architectures</h2>
          </div>
          <div className={styles.grid}>
            {recommendations.map((rec, i) => (
              <div key={i} className={styles.recCard}>
                <div className={styles.recType}>{rec.type}</div>
                <h3>{rec.name}</h3>
                <div className={styles.badge}>{rec.suitability}</div>
                <p>{rec.reason}</p>
                <div className={styles.featuresList}>
                  {rec.features.map((feat, f_i) => (
                    <div key={f_i} className={styles.feature}>
                      <CheckCircle2 size={16} className={styles.check} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <TableIcon className={styles.headerIcon} />
            <h2>Trial Phase Results</h2>
          </div>
          <div className={styles.infoAlert}>
            <Info size={20} />
            <p>The data below represents verified results from the previous simulation trial phase.</p>
          </div>
          <div className={styles.tableCard}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Trial Date</th>
                  <th>Config Variant</th>
                  <th>Accuracy Score</th>
                  <th>Mean Prediction</th>
                </tr>
              </thead>
              <tbody>
                {trialResults.map((res, i) => (
                  <tr key={i}>
                    <td>{res.date}</td>
                    <td><code className={styles.code}>{res.model}</code></td>
                    <td><strong>{res.accuracy}</strong></td>
                    <td>{res.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Recommendation;
