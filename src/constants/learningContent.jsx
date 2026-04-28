import React from 'react';
import { BookOpen, Layers, Zap, FlaskConical } from 'lucide-react';

export const LEARNING_DATA = [
  {
    id: 'intro-qml',
    slug: 'intro-qml',
    shortTitle: 'Intro to QML',
    title: 'Introduction to Quantum Machine Learning (QML)',
    icon: <BookOpen size={20} />,
    content: (
      <>
        <p>Quantum Machine Learning (QML) is an emerging multidisciplinary field that combines the principles of quantum physics with traditional machine learning techniques to solve complex computational problems.</p>
        <p>Unlike classical bits that exist in a state of either 0 or 1, quantum bits (qubits) utilize the principles of <strong>superposition</strong> and <strong>entanglement</strong>. This allows QML models to process information in a high-dimensional Hilbert space, potentially offering exponential speedups and superior pattern recognition capabilities for non-linear systems like global weather patterns.</p>
        <p>For wind forecasting specifically, QML excels at identifying subtle correlations between diverse atmospheric variables—such as temperature gradients, pressure differentials, and high-altitude moisture levels—that traditional classical models might overlook or find computationally prohibitive to process in real-time.</p>
      </>
    )
  },
  {
    id: 'model-overview',
    slug: 'model-overview',
    shortTitle: 'Model Overview',
    title: 'Overview of QML Models: VQR vs QNN',
    icon: <Layers size={20} />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>AeroQ supports multiple quantum architectures, each optimized for specific types of atmospheric data distributions and forecasting horizons.</p>
        <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ color: '#0369a1', marginBottom: '12px', fontSize: '1.2rem', fontWeight: 700 }}>VQR (Variational Quantum Regressor)</h4>
          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
            The Variational Quantum Regressor is our primary engine for continuous value estimation. It uses a parameterized quantum circuit (PQC) where the parameters are optimized using classical gradient-based or derivative-free algorithms. VQR is particularly effective for short-to-medium term wind speed forecasting due to its high sensitivity to local fluctuations in the input manifold.
          </p>
        </div>
        <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h4 style={{ color: '#0369a1', marginBottom: '12px', fontSize: '1.2rem', fontWeight: 700 }}>QNN (Quantum Neural Network)</h4>
          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
            Quantum Neural Networks adapt the architecture of classical deep learning to the quantum domain. They leverage quantum layers to perform feature extraction in high-dimensional state spaces. QNNs are highly robust against noise in meteorological sensor data and are used when the relationship between atmospheric variables is exceptionally complex or multi-modal.
          </p>
        </div>
        <p>Choosing between these depends on your data density and required prediction precision. VQR is often faster to train, while QNN can capture deeper spatial dependencies.</p>
      </div>
    )
  },
  {
    id: 'key-parameters',
    slug: 'key-parameters',
    shortTitle: 'Key Parameters',
    title: 'Hardening Your Model: Key Parameters Explained',
    icon: <Zap size={20} />,
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p>Configuring a quantum model requires a deep understanding of how classical information is mapped and processed within the quantum processor.</p>
        <div>
          <h5 style={{ fontWeight: 700, color: '#1e293b', marginBottom: '10px', fontSize: '1.1rem' }}>Feature Map (Data Encoding)</h5>
          <p style={{ color: '#475569', lineHeight: '1.6' }}>
            The Feature Map is the "Gateway" between classical data and the quantum world. Processes like <strong>ZFeatureMap</strong> and <strong>ZZFeatureMap</strong> use non-linear transformations to project your 1D sensor data into a high-dimensional quantum state. This projection is what allows the model to separate complex signals that appear overlapping in classical dimensions.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: 700, color: '#1e293b', marginBottom: '10px', fontSize: '1.1rem' }}>Ansatz (The Variational Circuit)</h5>
          <p style={{ color: '#475569', lineHeight: '1.6' }}>
            The Ansatz is the collection of gates and entanglements that make up the "trainable" portion of your circuit. Parameters like <strong>reps</strong> (repetitions) determine the depth of the circuit, while <strong>entanglement</strong> strategies (linear, full, circular) define how information flows between qubits. A deeper ansatz can learn more complex patterns but is more prone to barren plateaus during training.
          </p>
        </div>
        <div>
          <h5 style={{ fontWeight: 700, color: '#1e293b', marginBottom: '10px', fontSize: '1.1rem' }}>Optimizer (Performance Tuning)</h5>
          <p style={{ color: '#475569', lineHeight: '1.6' }}>
            The Optimizer is the bridge that tells the classical computer how to update the quantum parameters. **ADAM** is excellent for large datasets with stochastic gradients, while **COBYLA** is often preferred for smaller, noisier datasets where derivative-free optimization is more stable.
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'hybrid-approach',
    slug: 'hybrid-approach',
    shortTitle: 'Hybrid Approach',
    title: 'The Hybrid Strategy: Why Quantum + Classical?',
    icon: <FlaskConical size={20} />,
    content: (
      <>
        <p>Even in the era of quantum computing, the most efficient models remain <strong>Hybrid</strong>. Pure quantum models often struggle with raw data ingestion and final result interpretation, which classical hardware handles with ease.</p>
        <p>In the AeroQ pipeline, we utilize a three-stage hybrid execution:</p>
        <ol style={{ paddingLeft: '20px', marginBottom: '24px', color: '#475569', lineHeight: '1.8' }}>
          <li><strong>Classical Pre-processing:</strong> Normalization, Lag creation (t-1, t-2), and principal component analysis (PCA) to reduce noise.</li>
          <li><strong>Quantum Core:</strong> Data is passed via a Feature Map into the Ansatz, where high-dimensional feature interaction occurs in the Hilbert space.</li>
          <li><strong>Classical Post-processing:</strong> The output from the quantum measurement is mapped back to physical wind speeds using a classical regressor (like Lasso or Ridge) to ensure the predictions remain physically bounded.</li>
        </ol>
        <p>This approach maximizes the "Quantum Advantage" where it matters most—in the complex feature correlation phase—while maintaining the reliability of proven classical statistical methods.</p>
      </>
    )
  }
];
