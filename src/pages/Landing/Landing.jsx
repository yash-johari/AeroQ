import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import { Zap, Shield, BarChart3, Globe, ArrowRight, Cpu } from 'lucide-react';

const Landing = () => {
  return (
    <div className={styles.landing}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Predicting the <span className={styles.highlight}>Future</span> of Wind Energy
            </h1>
            <p className={styles.subtitle}>
              AeroQ leverages hybrid quantum-classical algorithms to provide unprecedented accuracy in wind speed forecasting.
            </p>
            <div className={styles.heroActions}>
              <Link to="/dashboard" className={styles.primaryBtn}>
                Explore Dashboard <ArrowRight size={20} />
              </Link>
              <Link to="/predictor" className={styles.secondaryBtn}>
                Get Started
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.abstractShape}></div>
            <img 
              src="https://picsum.photos/seed/turbine/800/600" 
              alt="Advanced Wind Turbine Technology" 
              className={styles.mainImg}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Cutting-Edge Features</h2>
            <p className={styles.sectionSubtitle}>Designed for precision and performance</p>
          </div>
          
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={`${styles.iconBox} ${styles.green}`}>
                <Shield size={32} />
              </div>
              <h3>Accurate Wind Prediction</h3>
              <p>Our models achieve 98% accuracy in short-term wind speed forecasting using real-time atmospheric data.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={`${styles.iconBox} ${styles.blue}`}>
                <Cpu size={32} />
              </div>
              <h3>Hybrid AI Model</h3>
              <p>Combining quantum computing principles with advanced classification for superior pattern recognition.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={`${styles.iconBox} ${styles.orange}`}>
                <BarChart3 size={32} />
              </div>
              <h3>Real-time Analytics</h3>
              <p>Instant processing of sensor data to provide up-to-the-minute insights and trend analysis.</p>
            </div>
            
            <div className={styles.featureCard}>
              <div className={`${styles.iconBox} ${styles.blue}`}>
                <Globe size={32} />
              </div>
              <h3>Interactive Dashboard</h3>
              <p>A comprehensive visual interface to monitor wind patterns across multiple global regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <div className={styles.splitContent}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Why Choose AeroQ?</h2>
              <ul className={styles.checkList}>
                <li>
                  <div className={styles.checkIcon}><Zap size={16} /></div>
                  <div>
                    <h4>Quantum-Enhanced Speed</h4>
                    <p>Process complex meteorological datasets 10x faster than traditional systems.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.checkIcon}><Zap size={16} /></div>
                  <div>
                    <h4>Scalable Infrastructure</h4>
                    <p>From single turbines to massive offshore wind farms, AeroQ scales with your needs.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.checkIcon}><Zap size={16} /></div>
                  <div>
                    <h4>Cost Efficiency</h4>
                    <p>Optimize energy production and reduce maintenance costs with predictive maintenance alerts.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={styles.imageContent}>
              <img 
                src="https://picsum.photos/seed/tech/600/400" 
                alt="Technology" 
                className={styles.sideImg}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
