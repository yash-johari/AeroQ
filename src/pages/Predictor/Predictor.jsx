import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Predictor.module.css';
import { 
  Wind, Thermometer, Droplets, Gauge, ArrowLeft 
} from 'lucide-react';
import { 
  AreaChart as RechartsAreaChart, Area as RechartsArea, XAxis as RechartsXAxis, 
  YAxis as RechartsYAxis, CartesianGrid as RechartsCartesianGrid, 
  Tooltip as RechartsTooltip, ResponsiveContainer as RechartsResponsiveContainer 
} from 'recharts';

const Predictor = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    temperature: '',
    humidity: '',
    pressure: ''
  });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const handlePredict = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate prediction logic
    setTimeout(() => {
      const baseSpeed = parseFloat(inputs.temperature) * 0.2 + (parseFloat(inputs.pressure) - 1000) * 0.1;
      const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];
      
      const results = days.map((day, index) => ({
        day,
        speed: Math.max(5, Math.min(45, baseSpeed + Math.sin(index) * 5 + Math.random() * 3)).toFixed(1)
      }));
      
      setPrediction(results);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.predictorPage}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </button>

        <div className={styles.grid}>
          {/* Input Section */}
          <div className={styles.inputCard}>
            <div className={styles.cardHeader}>
              <h2>Wind Speed Predictor</h2>
              <p>Enter atmospheric parameters to generate a 7-day forecast</p>
            </div>

            <form className={styles.form} onSubmit={handlePredict}>
              <div className={styles.inputGroup}>
                <label>Temperature (°C)</label>
                <div className={styles.inputWrapper}>
                  <Thermometer size={18} className={styles.icon} />
                  <input 
                    type="number" 
                    name="temperature"
                    value={inputs.temperature}
                    onChange={handleInputChange}
                    placeholder="e.g. 25"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Humidity (%)</label>
                <div className={styles.inputWrapper}>
                  <Droplets size={18} className={styles.icon} />
                  <input 
                    type="number" 
                    name="humidity"
                    value={inputs.humidity}
                    onChange={handleInputChange}
                    placeholder="e.g. 60"
                    required
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label>Atmospheric Pressure (hPa)</label>
                <div className={styles.inputWrapper}>
                  <Gauge size={18} className={styles.icon} />
                  <input 
                    type="number" 
                    name="pressure"
                    value={inputs.pressure}
                    onChange={handleInputChange}
                    placeholder="e.g. 1013"
                    required
                  />
                </div>
              </div>

              <button type="submit" className={styles.predictBtn} disabled={loading}>
                {loading ? 'Processing...' : 'Generate Prediction'}
                {!loading && <Wind size={18} />}
              </button>
            </form>
          </div>

          {/* Results Section */}
          <div className={styles.resultsCard}>
            {prediction ? (
              <div className={styles.resultsContent}>
                <h3>7-Day Forecast Results</h3>
                <div className={styles.chartContainer}>
                  <RechartsResponsiveContainer width="100%" height={300}>
                    <RechartsAreaChart data={prediction}>
                      <defs>
                        <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2ecc71" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#2ecc71" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <RechartsCartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <RechartsXAxis dataKey="day" axisLine={false} tickLine={false} />
                      <RechartsYAxis axisLine={false} tickLine={false} />
                      <RechartsTooltip 
                        contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                      />
                      <RechartsArea 
                        type="monotone" 
                        dataKey="speed" 
                        stroke="#2ecc71" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorSpeed)" 
                        name="Wind Speed (km/h)"
                      />
                    </RechartsAreaChart>
                  </RechartsResponsiveContainer>
                </div>

                <div className={styles.forecastList}>
                  {prediction.map((item, idx) => (
                    <div key={idx} className={styles.forecastItem}>
                      <span className={styles.dayLabel}>{item.day}</span>
                      <span className={styles.speedValue}>{item.speed} km/h</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.emptyState}>
                <Wind size={48} className={styles.emptyIcon} />
                <p>Enter parameters and click "Generate Prediction" to see the results here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predictor;
