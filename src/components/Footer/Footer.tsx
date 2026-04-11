import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Wind, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.logo}>
            <Wind className={styles.logoIcon} />
            <span>AeroQ</span>
          </Link>
          <p className={styles.description}>
            Advanced wind speed prediction using hybrid quantum-classification models.
          </p>
          <div className={styles.bottom}>
            <p>&copy; {new Date().getFullYear()} AeroQ. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
