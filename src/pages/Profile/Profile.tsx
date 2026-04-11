import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Profile.module.css';
import { User, Mail, Calendar, MapPin, Edit } from 'lucide-react';

const Profile: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Yash Johari',
    email: 'yashjohari2508@gmail.com',
    joined: 'April 2026',
    location: 'India',
    bio: 'Professional developer interested in renewable energy and quantum computing applications.',
    stats: {
      predictions: 124,
      accuracy: '94%',
      reports: 12
    }
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.container}>
        <div className={styles.profileHeader}>
          <div className={styles.avatarLarge}>Y</div>
          <div className={styles.headerInfo}>
            <h1>{user.name}</h1>
            <p className={styles.email}>{user.email}</p>
          </div>
          <Link to="/update" className={styles.editBtn}>
            <Edit size={18} />
            <span>Edit Profile</span>
          </Link>
        </div>

        <div className={styles.profileGrid}>
          <div className={styles.mainContent}>
            <div className={styles.card}>
              <h3>About Me</h3>
              <p className={styles.bio}>{user.bio}</p>
              
              <div className={styles.detailsList}>
                <div className={styles.detailItem}>
                  <Mail size={18} />
                  <span>{user.email}</span>
                </div>
                <div className={styles.detailItem}>
                  <MapPin size={18} />
                  <span>{user.location}</span>
                </div>
                <div className={styles.detailItem}>
                  <Calendar size={18} />
                  <span>Joined {user.joined}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.card}>
              <h3>Activity Summary</h3>
              <div className={styles.statsList}>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Total Predictions</span>
                  <span className={styles.statValue}>{user.stats.predictions}</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Avg. Accuracy</span>
                  <span className={styles.statValue}>{user.stats.accuracy}</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statLabel}>Reports Generated</span>
                  <span className={styles.statValue}>{user.stats.reports}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
