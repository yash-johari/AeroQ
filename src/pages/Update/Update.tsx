import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Update.module.css';
import { User, Mail, MapPin, FileText, Save, ArrowLeft } from 'lucide-react';

const Update: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: 'Yash Johari',
    email: 'yashjohari2508@gmail.com',
    location: 'India',
    bio: 'Professional developer interested in renewable energy and quantum computing applications.'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log('Profile updated:', formData);
    navigate('/profile');
  };

  return (
    <div className={styles.updatePage}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/profile')}>
          <ArrowLeft size={18} />
          <span>Back to Profile</span>
        </button>

        <div className={styles.formCard}>
          <div className={styles.header}>
            <h2>Update Profile</h2>
            <p>Modify your personal information and preferences</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <div className={styles.inputWrapper}>
                <User size={18} className={styles.icon} />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email Address</label>
              <div className={styles.inputWrapper}>
                <Mail size={18} className={styles.icon} />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Location</label>
              <div className={styles.inputWrapper}>
                <MapPin size={18} className={styles.icon} />
                <input 
                  type="text" 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Your Location"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Bio</label>
              <div className={styles.inputWrapper}>
                <FileText size={18} className={`${styles.icon} ${styles.topIcon}`} />
                <textarea 
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder="Tell us about yourself"
                  rows={4}
                />
              </div>
            </div>

            <button type="submit" className={styles.saveBtn}>
              <Save size={18} />
              <span>Save Changes</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
