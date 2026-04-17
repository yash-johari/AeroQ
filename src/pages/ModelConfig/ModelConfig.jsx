import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ModelConfig.module.css';
import { 
  Info, ArrowLeft, Play, CheckCircle2, Cpu, BarChart3, 
  Wind, Layers, FlaskConical, Settings2, Loader2,
  Table as TableIcon
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend, LineChart, Line 
} from 'recharts';

const TooltipIcon = ({ text }) => (
  <div className={styles.tooltipContainer}>
    <Info size={14} className={styles.infoIcon} />
    <span className={styles.tooltipText}>{text}</span>
  </div>
);

const ModelConfig = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isTraining, setIsTraining] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Form State
  const [config, setConfig] = useState({
    lags: '',
    features: [],
    featureInputs: { Humidity: '', Temperature: '', Pressure: '' },
    quantum: {
      model: 'VQR',
      featureMap: { entanglement: 'full', reps: '2' },
      ansatz: { entanglement: 'full', reps: '3' },
      optimizer: 'ADAM'
    },
    classical: {
      model: '',
      params: {}
    }
  });

  // Steps handling
  const handleLagsChange = (e) => {
    setConfig({ ...config, lags: e.target.value });
    if (e.target.value && step === 1) setStep(2);
  };

  const toggleFeature = (feature) => {
    let newFeatures;
    if (config.features.includes(feature)) {
      newFeatures = config.features.filter(f => f !== feature);
    } else {
      newFeatures = [...config.features, feature];
    }
    setConfig({ ...config, features: newFeatures });
  };

  const handleFeatureInputChange = (feature, value) => {
    setConfig({
      ...config,
      featureInputs: { ...config.featureInputs, [feature]: value }
    });
  };

  const handleNextToModel = () => {
    const allInputsFilled = config.features.every(f => config.featureInputs[f].trim() !== '');
    if (config.features.length > 0 && allInputsFilled) {
      setStep(3);
    } else if (!allInputsFilled) {
      alert('Please provide input values for all selected features.');
    }
  };

  const handleQuantumParam = (section, field, value) => {
    setConfig({
      ...config,
      quantum: {
        ...config.quantum,
        [section]: { ...config.quantum[section], [field]: value }
      }
    });
  };

  const handleClassicalModelChange = (e) => {
    const model = e.target.value;
    let defaultParams = {};
    
    switch(model) {
      case 'Lasso': defaultParams = { alpha: '1.0', max_iter: '1000', tol: '0.0001', selection: 'cyclic' }; break;
      case 'Decision Tree': defaultParams = { max_depth: 'None', min_samples_split: '2', min_samples_leaf: '1', criterion: 'squared_error' }; break;
      case 'Random Forest': defaultParams = { n_estimators: '100', max_depth: 'None', min_samples_split: '2', max_features: 'sqrt' }; break;
      case 'Gradient Boosting': defaultParams = { n_estimators: '100', learning_rate: '0.1', max_depth: '3', subsample: '1.0' }; break;
      case 'Linear Regression': defaultParams = { fit_intercept: 'True', positive: 'False', copy_X: 'True', n_jobs: 'None' }; break;
      case 'SVR': defaultParams = { C: '1.0', kernel: 'rbf', gamma: 'scale', epsilon: '0.1' }; break;
      default: defaultParams = {};
    }

    setConfig({
      ...config,
      classical: { model, params: defaultParams }
    });
  };

  const handleClassicalParam = (field, value) => {
    setConfig({
      ...config,
      classical: {
        ...config.classical,
        params: { ...config.classical.params, [field]: value }
      }
    });
  };

  const handleTrain = () => {
    setIsTraining(true);
    // Simulate training
    setTimeout(() => {
      setIsTraining(false);
      setShowResults(true);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 3000);
  };

  // Mock Results Data
  const chartData = [
    { name: 'Day 1', quantum: 12.5, classical: 11.2, hybrid: 12.1 },
    { name: 'Day 2', quantum: 14.2, classical: 13.5, hybrid: 14.0 },
    { name: 'Day 3', quantum: 11.8, classical: 10.1, hybrid: 11.2 },
    { name: 'Day 4', quantum: 15.6, classical: 14.2, hybrid: 15.1 },
    { name: 'Day 5', quantum: 13.9, classical: 12.8, hybrid: 13.4 },
    { name: 'Day 6', quantum: 12.1, classical: 11.0, hybrid: 11.8 },
    { name: 'Day 7', quantum: 14.8, classical: 13.9, hybrid: 14.5 },
  ];

  const metricsData = [
    { model: 'Quantum Model', rmse: '2.45', mae: '1.82' },
    { model: 'Classical Model', rmse: '3.12', mae: '2.45' },
    { model: 'Hybrid Model', rmse: '2.12', mae: '1.54' },
  ];

  const forecastData = [
    { day: 'Monday', speed: '12.4 km/h', status: 'Moderate' },
    { day: 'Tuesday', speed: '14.1 km/h', status: 'Moderate' },
    { day: 'Wednesday', speed: '11.2 km/h', status: 'Low' },
    { day: 'Thursday', speed: '15.8 km/h', status: 'High' },
    { day: 'Friday', speed: '13.5 km/h', status: 'Moderate' },
    { day: 'Saturday', speed: '12.0 km/h', status: 'Low' },
    { day: 'Sunday', speed: '14.9 km/h', status: 'Moderate' },
  ];

  return (
    <div className={styles.configPage}>
      <div className={styles.container}>
        <button className={styles.backBtn} onClick={() => navigate('/dashboard')}>
          <ArrowLeft size={18} />
          <span>Back to Dashboard</span>
        </button>

        <div className={styles.header}>
          <h1>Model Configuration</h1>
          <p>Configure and train your hybrid wind prediction pipeline</p>
        </div>

        {/* --- STEP 1: Lags --- */}
        <section className={`${styles.configSection} ${step >= 1 ? styles.active : styles.disabled}`}>
          <div className={styles.sectionTitle}>
            <div className={styles.stepBadge}>1</div>
            <h3>Number of Lags</h3>
            <TooltipIcon text="Number of previous time steps to consider for prediction." />
          </div>
          <div className={styles.inputArea}>
            <select 
              value={config.lags} 
              onChange={handleLagsChange}
              className={styles.select}
            >
              <option value="">Select Lags</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </section>

        {/* --- STEP 2: Features --- */}
        {step >= 2 && (
          <section className={`${styles.configSection} ${step >= 2 ? styles.active : ''}`}>
            <div className={styles.sectionTitle}>
              <div className={styles.stepBadge}>2</div>
              <h3>Feature Selection</h3>
              <TooltipIcon text="Select atmospheric variables to be used as inputs for the model." />
            </div>
            <div className={styles.featureGrid}>
              {['Humidity', 'Temperature', 'Pressure'].map(feature => (
                <div key={feature} className={styles.featureWrapper}>
                  <button
                    className={`${styles.featureBtn} ${config.features.includes(feature) ? styles.featureActive : ''}`}
                    onClick={() => toggleFeature(feature)}
                  >
                    {feature}
                  </button>
                  {config.features.includes(feature) && (
                    <div className={styles.featureInputBox}>
                      <input 
                        type="number" 
                        placeholder={`Value for ${feature}`}
                        value={config.featureInputs[feature]}
                        onChange={(e) => handleFeatureInputChange(feature, e.target.value)}
                        className={styles.inlineInput}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {config.features.length > 0 && step === 2 && (
              <button 
                className={styles.stepBtn} 
                onClick={handleNextToModel}
                disabled={!config.features.every(f => config.featureInputs[f].trim() !== '')}
              >
                Confirm Features <Play size={14} />
              </button>
            )}
          </section>
        )}

        {/* --- STEP 3: Model Selection --- */}
        {step >= 3 && (
          <section className={`${styles.configSection} ${step >= 3 ? styles.active : ''}`}>
            <div className={styles.sectionTitle}>
              <div className={styles.stepBadge}>3</div>
              <h3>Model Parameters</h3>
              <TooltipIcon text="Configure parameters for both Quantum and Classical layers." />
            </div>

            <div className={styles.modelsGrid}>
              {/* Quantum Config */}
              <div className={styles.subCard}>
                <div className={styles.subHeader}>
                  <Cpu size={18} />
                  <h4>Quantum Model (VQR)</h4>
                </div>
                
                <div className={styles.paramGroup}>
                  <h5>Feature Map <TooltipIcon text="Maps classical data into quantum state space." /></h5>
                  <div className={styles.grid2}>
                    <div className={styles.field}>
                      <label>Entanglement</label>
                      <select 
                        value={config.quantum.featureMap.entanglement}
                        onChange={(e) => handleQuantumParam('featureMap', 'entanglement', e.target.value)}
                      >
                        <option value="full">Full</option>
                        <option value="linear">Linear</option>
                        <option value="circular">Circular</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Reps</label>
                      <select 
                        value={config.quantum.featureMap.reps}
                        onChange={(e) => handleQuantumParam('featureMap', 'reps', e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.paramGroup}>
                  <h5>Ansatz <TooltipIcon text="The variational circuit structure for the model." /></h5>
                  <div className={styles.grid2}>
                    <div className={styles.field}>
                      <label>Entanglement</label>
                      <select 
                        value={config.quantum.ansatz.entanglement}
                        onChange={(e) => handleQuantumParam('ansatz', 'entanglement', e.target.value)}
                      >
                        <option value="full">Full</option>
                        <option value="linear">Linear</option>
                        <option value="circular">Circular</option>
                      </select>
                    </div>
                    <div className={styles.field}>
                      <label>Reps</label>
                      <select 
                        value={config.quantum.ansatz.reps}
                        onChange={(e) => handleQuantumParam('ansatz', 'reps', e.target.value)}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.paramGroup}>
                  <div className={styles.field}>
                    <label>Optimizer <TooltipIcon text="Algorithm used to update quantum circuit weights." /></label>
                    <select 
                      value={config.quantum.optimizer}
                      onChange={(e) => setConfig({...config, quantum: {...config.quantum, optimizer: e.target.value}})}
                    >
                      <option value="COBYLA">COBYLA</option>
                      <option value="SPSA">SPSA</option>
                      <option value="ADAM">ADAM</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Classical Config */}
              <div className={styles.subCard}>
                <div className={styles.subHeader}>
                  <FlaskConical size={18} />
                  <h4>Classical Model</h4>
                </div>
                <div className={styles.field}>
                  <label>Model Selector <TooltipIcon text="Choose the classical algorithm for the hybrid stack." /></label>
                  <select 
                    value={config.classical.model}
                    onChange={handleClassicalModelChange}
                    className={styles.fullWidth}
                  >
                    <option value="">Select Model</option>
                    <option value="Lasso">Lasso</option>
                    <option value="Decision Tree">Decision Tree</option>
                    <option value="Random Forest">Random Forest</option>
                    <option value="Gradient Boosting">Gradient Boosting</option>
                    <option value="Linear Regression">Linear Regression</option>
                    <option value="SVR">SVR</option>
                  </select>
                </div>

                {config.classical.model && (
                  <div className={styles.paramGroup}>
                    <div className={styles.grid2}>
                      {Object.keys(config.classical.params).map(param => (
                        <div key={param} className={styles.field}>
                          <label>{param.replace('_', ' ').charAt(0).toUpperCase() + param.slice(1)}</label>
                          <input 
                            type="text" 
                            value={config.classical.params[param]} 
                            onChange={(e) => handleClassicalParam(param, e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {config.classical.model && step === 3 && (
              <button className={styles.stepBtn} onClick={() => setStep(4)}>
                Generate Summary <CheckCircle2 size={14} />
              </button>
            )}
          </section>
        )}

        {/* --- STEP 4: Summary & Train --- */}
        {step >= 4 && (
          <section className={`${styles.configSection} ${styles.summarySection} ${styles.active}`}>
            <div className={styles.sectionTitle}>
              <div className={styles.stepBadge}>4</div>
              <h3>Configuration Summary</h3>
            </div>
            
            <div className={styles.summaryGrid}>
              <div className={styles.summaryItem}>
                <span>Lags</span>
                <strong>{config.lags}</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Features</span>
                <strong>
                  {config.features.map(f => `${f} (${config.featureInputs[f]})`).join(', ')}
                </strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Quantum</span>
                <strong>{config.quantum.model} ({config.quantum.optimizer})</strong>
              </div>
              <div className={styles.summaryItem}>
                <span>Classical</span>
                <strong>{config.classical.model}</strong>
              </div>
            </div>

            {!showResults && (
              <button 
                className={styles.trainBtn} 
                onClick={handleTrain}
                disabled={isTraining}
              >
                {isTraining ? (
                  <>
                    <Loader2 size={18} className={styles.spin} />
                    Training model, please wait...
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    TRAIN
                  </>
                )}
              </button>
            )}
          </section>
        )}

        {/* --- STEP 5: Results --- */}
        {showResults && (
          <div className={styles.resultsContainer}>
            <div className={styles.resultHeader}>
              <CheckCircle2 size={32} color="var(--primary-green)" />
              <div>
                <h2>Training Complete</h2>
                <p>Performance metrics and forecast generated successfully</p>
              </div>
            </div>

            <div className={styles.resultsGrid}>
              {/* Performance Graph */}
              <div className={styles.resultCard}>
                <div className={styles.subHeader}>
                  <BarChart3 size={18} />
                  <h4>Model Performance Comparison</h4>
                </div>
                <div className={styles.chartBox}>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="quantum" stroke="#3498db" strokeWidth={2} name="Quantum" />
                      <Line type="monotone" dataKey="classical" stroke="#e67e22" strokeWidth={2} name="Classical" />
                      <Line type="monotone" dataKey="hybrid" stroke="#2ecc71" strokeWidth={3} name="Hybrid (Ours)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Metrics Table */}
              <div className={styles.resultCard}>
                <div className={styles.subHeader}>
                  <TableIcon size={18} />
                  <h4>Error Metrics (RMSE & MAE)</h4>
                </div>
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Model Type</th>
                        <th>RMSE</th>
                        <th>MAE</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metricsData.map((m, i) => (
                        <tr key={i} className={m.model.includes('Hybrid') ? styles.highlightRow : ''}>
                          <td>{m.model}</td>
                          <td>{m.rmse}</td>
                          <td>{m.mae}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Forecast Table */}
              <div className={`${styles.resultCard} ${styles.fullRow}`}>
                <div className={styles.subHeader}>
                  <Wind size={18} />
                  <h4>Next 7 Days Wind Speed Forecast</h4>
                </div>
                <div className={styles.tableWrapper}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Predicted Speed</th>
                        <th>Condition Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {forecastData.map((f, i) => (
                        <tr key={i}>
                          <td>{f.day}</td>
                          <td><strong>{f.speed}</strong></td>
                          <td>
                            <span className={`${styles.statusBadge} ${styles[f.status.toLowerCase()]}`}>
                              {f.status}
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
        )}
      </div>
    </div>
  );
};

export default ModelConfig;
