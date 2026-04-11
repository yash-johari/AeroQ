import React, { useState, useEffect } from 'react';
import styles from './Dashboard.module.css';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  BarChart, Bar
} from 'recharts';
import { 
  Wind, Thermometer, Droplets, Calendar, MapPin, 
  ArrowUpRight, ArrowDownRight, RefreshCw
} from 'lucide-react';

// Mock Data
const generateMockData = (region) => {
  const data = [];
  const baseWind = region === 'North' ? 15 : region === 'South' ? 10 : 12;
  const baseTemp = region === 'North' ? 18 : region === 'South' ? 25 : 22;
  
  for (let i = 0; i < 24; i++) {
    data.push({
      time: `${i}:00`,
      windSpeed: Math.floor(baseWind + Math.random() * 10),
      temperature: Math.floor(baseTemp + Math.random() * 5),
      humidity: Math.floor(40 + Math.random() * 30),
    });
  }
  return data;
};

const Dashboard = () => {
  const [region, setRegion] = useState('Global');
  const [dateRange, setDateRange] = useState('Next Day');
  const [data, setData] = useState(generateMockData('Global'));
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    setIsRefreshing(true);
    const timer = setTimeout(() => {
      setData(generateMockData(region));
      setIsRefreshing(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [region, dateRange]);

  const stats = [
    { title: 'Avg Wind Speed', value: '14.2 km/h', icon: <Wind />, color: 'blue', trend: '+2.4%' },
    { title: 'Avg Temperature', value: '22.5 °C', icon: <Thermometer />, color: 'orange', trend: '-1.2%' },
    { title: 'Avg Humidity', value: '58%', icon: <Droplets />, color: 'green', trend: '+0.5%' },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.container}>
        {/* Header & Filters */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <h1>Wind Analytics Dashboard</h1>
            <p>Real-time insights and hybrid model predictions</p>
          </div>
          
          <div className={styles.filters}>
            <div className={styles.filterItem}>
              <MapPin size={16} />
              <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option>Global</option>
                <option>North</option>
                <option>South</option>
                <option>East</option>
                <option>West</option>
              </select>
            </div>
            <div className={styles.filterItem}>
              <Calendar size={16} />
              <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
                <option>Next Day</option>
                <option>Next 7 Days</option>
              </select>
            </div>
            <button className={styles.refreshBtn} onClick={() => setData(generateMockData(region))}>
              <RefreshCw size={16} className={isRefreshing ? styles.spin : ''} />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={`${styles.statIcon} ${styles[stat.color]}`}>
                {stat.icon}
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statTitle}>{stat.title}</span>
                <div className={styles.statValueRow}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={stat.trend.startsWith('+') ? styles.trendUp : styles.trendDown}>
                    {stat.trend.startsWith('+') ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                    {stat.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className={styles.chartsGrid}>
          <div className={styles.chartCard}>
            <h3>Wind Speed Prediction (km/h)</h3>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorWind" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3498db" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3498db" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="windSpeed" 
                    stroke="#3498db" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorWind)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={styles.chartCard}>
            <h3>Temperature & Humidity</h3>
            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
                  />
                  <Bar dataKey="temperature" fill="#e67e22" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="humidity" fill="#2ecc71" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <h3>Detailed Dataset Inputs</h3>
            <button className={styles.exportBtn}>Export CSV</button>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Wind Speed (km/h)</th>
                  <th>Temp (°C)</th>
                  <th>Humidity (%)</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.slice(0, 10).map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.time}</td>
                    <td>{row.windSpeed}</td>
                    <td>{row.temperature}</td>
                    <td>{row.humidity}</td>
                    <td>
                      <span className={`${styles.badge} ${row.windSpeed > 18 ? styles.badgeHigh : styles.badgeNormal}`}>
                        {row.windSpeed > 18 ? 'High' : 'Normal'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
