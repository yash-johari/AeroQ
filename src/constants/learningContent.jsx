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
    ),
    quizzes: [
      {
        question: "What is the fundamental unit of information in quantum computing?",
        options: ["Bit", "Qubit", "Byte", "Node"],
        answer: "Qubit",
        explanation: "Correct! A qubit (quantum bit) is the basic unit of information in quantum computing. Unlike a classical bit, it can exist in multiple states at once.",
        wrongFeedback: "Incorrect. A bit is classical. The correct answer is Qubit, which leverages quantum mechanics for processing."
      },
      {
        question: "Which quantum principle allows a qubit to hold a state of 0 and 1 simultaneously?",
        options: ["Entanglement", "Superposition", "Interference", "Decoherence"],
        answer: "Superposition",
        explanation: "Correct! Superposition is what allows quantum particles to exist in multiple states at the same time until measured.",
        wrongFeedback: "Incorrect. Entanglement links particles, but Superposition is what allows multiple states simultaneously."
      },
      {
        question: "Why is high-dimensional processing important for wind forecasting?",
        options: ["It makes the UI prettier", "It helps track weather balloons", "Atmospheric variables have complex, non-linear correlations", "Quantum computers are cheaper"],
        answer: "Atmospheric variables have complex, non-linear correlations",
        explanation: "Correct! Wind is influenced by many interacting variables. High-dimensional state spaces in quantum computing can capture these complex correlations better than classical 1D/2D models.",
        wrongFeedback: "Incorrect. The main reason is data complexity. Quantum computers are currently more expensive, and it's not about UI."
      },
      {
        question: "What does 'Hilbert Space' refer to in the context of QML?",
        options: ["A physical server room", "A mathematical space where quantum states live", "A type of weather station", "The person who invented qubits"],
        answer: "A mathematical space where quantum states live",
        explanation: "Correct! The Hilbert space is the mathematical framework used to describe the state of a quantum system.",
        wrongFeedback: "Incorrect. It's a mathematical concept representing the 'size' or 'potential' of quantum states, not a physical place."
      },
      {
        question: "Quantum Machine Learning combines which two fields?",
        options: ["Biology and Chemistry", "Quantum Physics and Classical Machine Learning", "Geology and History", "Art and Mathematics"],
        answer: "Quantum Physics and Classical Machine Learning",
        explanation: "Correct! QML is the intersection of these two powerful domains.",
        wrongFeedback: "Incorrect. It's specifically the merger of Quantum Mechanics and AI techniques."
      },
      {
        question: "What is 'Entanglement' in quantum mechanics?",
        options: ["When qubits get tangled in wires", "A state where the property of one qubit depends on another", "A type of software bug", "A method for cooling processors"],
        answer: "A state where the property of one qubit depends on another",
        explanation: "Correct! Entangled qubits share a connection where measuring one instantly affects or reveals information about the other.",
        wrongFeedback: "Incorrect. It's an information-sharing phenomenon, not a physical wire issue."
      },
      {
        question: "True or False: Quantum computers aim to replace all classical computers.",
        options: ["True", "False"],
        answer: "False",
        explanation: "Correct! Quantum computers are meant for specific complex tasks where they provide an advantage, while classical computers remain better for general-purpose tasks.",
        wrongFeedback: "Incorrect. They are specialized tools, not total replacements."
      },
      {
        question: "In the context of AeroQ, what is the 'Quantum Advantage'?",
        options: ["Lower power consumption", "Captured non-linear atmospheric patterns", "Faster internet speed", "Infinite storage"],
        answer: "Captured non-linear atmospheric patterns",
        explanation: "Correct! The advantage lies in the model's ability to 'see' complex weather relationships more clearly.",
        wrongFeedback: "Incorrect. The advantage is about predictive quality and pattern recognition in complex data."
      },
      {
        question: "What happens to a qubit when it is 'measured'?",
        options: ["It replicates", "It collapses into a single classical state (0 or 1)", "It enters a deeper superposition", "It becomes twice as fast"],
        answer: "It collapses into a single classical state (0 or 1)",
        explanation: "Correct! This is known as wave-function collapse. Upon measurement, the probabilistic state becomes deterministic.",
        wrongFeedback: "Incorrect. Measurement 'fixes' the state, losing the superposition."
      },
      {
        question: "Which of these is a variable AeroQ might process using QML?",
        options: ["Historical stock prices", "Pressure differentials", "User ratings of movies", "Pizza toppings"],
        answer: "Pressure differentials",
        explanation: "Correct! AeroQ focuses on meteorological data like pressure, temperature, and humidity for wind forecasting.",
        wrongFeedback: "Incorrect. AeroQ is a weather application. It uses atmospheric variables."
      }
    ]
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
    ),
    quizzes: [
      {
        question: "What does VQR stand for?",
        options: ["Variable Quality Receiver", "Variational Quantum Regressor", "Virtual Quantum Reality", "Valued Quantum Registry"],
        answer: "Variational Quantum Regressor",
        explanation: "Correct! VQR is used for continuous output prediction.",
        wrongFeedback: "Incorrect. It's Variational Quantum Regressor, specifically designed for regression tasks."
      },
      {
        question: "Which model is inspired by classical deep learning?",
        options: ["VQR", "QNN", "CSV", "PDF"],
        answer: "QNN",
        explanation: "Correct! QNN stands for Quantum Neural Network, translating deep learning layers into quantum gates.",
        wrongFeedback: "Incorrect. QNN is the quantum equivalent of a neural network."
      },
      {
        question: "What is a 'Parameterized Quantum Circuit' (PQC)?",
        options: ["A circuit with fixed logic", "A circuit where gate values can be adjusted/trained", "A circuit for cooling water", "A type of classical hard drive"],
        answer: "A circuit where gate values can be adjusted/trained",
        explanation: "Correct! PQCs allow us to treat a quantum circuit as a learnable model, much like weights in a neural network.",
        wrongFeedback: "Incorrect. The 'Parameters' are what we tune to make the model learn."
      },
      {
        question: "Which model is better for capturing 'deep spatial dependencies'?",
        options: ["VQR", "QNN", "Excel", "Linear Regression"],
        answer: "QNN",
        explanation: "Correct! QNN architectures are generally better at extracting high-level features from complex data.",
        wrongFeedback: "Incorrect. QNNs are built for deeper hierarchical structure."
      },
      {
        question: "What is the primary role of the classical computer in a Variational algorithm?",
        options: ["Building the quantum chips", "Optimizing the parameters for the next iteration", "Storing infinite qubits", "Doing nothing"],
        answer: "Optimizing the parameters for the next iteration",
        explanation: "Correct! In hybrid algorithms, the quantum computer runs the circuit, and the classical computer updates the parameters.",
        wrongFeedback: "Incorrect. The classical computer handles the 'learning' update logic."
      },
      {
        question: "Why would you choose VQR for wind speed prediction?",
        options: ["Because it's a regression task (continuous values)", "Because it's a classification task", "Because it uses more electricity", "Because it is older"],
        answer: "Because it's a regression task (continuous values)",
        explanation: "Correct! Wind speed is a continuous number, making regression the appropriate approach.",
        wrongFeedback: "Incorrect. Regression models predict numbers (speeds); classifiers predict categories."
      },
      {
        question: "True or False: QNNs are typically more robust against noise in sensor data.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Correct! QNNs' hierarchical structure often allows them to filter out sensor noise better than flat regressors.",
        wrongFeedback: "Incorrect. Their complex layers act as a filter, making them more noise-tolerant."
      },
      {
        question: "In VQR, what is being approximated?",
        options: ["Pizza prices", "A continuous function mapping weather data to wind speed", "The number of stars in the sky", "User passwords"],
        answer: "A continuous function mapping weather data to wind speed",
        explanation: "Correct! The model tries to find the function that best matches historical observations.",
        wrongFeedback: "Incorrect. It maps atmospheric inputs to velocity outputs."
      },
      {
        question: "What is an 'input manifold'?",
        options: ["A part of a sports car", "The mathematical shape formed by your input data features", "A quantum gateway", "A type of weather balloon"],
        answer: "The mathematical shape formed by your input data features",
        explanation: "Correct! Understanding the data's geometry helps in choosing the right model.",
        wrongFeedback: "Incorrect. It refers to the topology of the data space."
      },
      {
        question: "Which model is typically faster to train for simple datasets?",
        options: ["QNN", "VQR"],
        answer: "VQR",
        explanation: "Correct! VQR usually has a simpler structure and fewer parameters to tune initially.",
        wrongFeedback: "Incorrect. VQR's direct approach is usually more efficient for simpler regression."
      }
    ]
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
    ),
    quizzes: [
      {
        question: "What is the role of a 'Feature Map'?",
        options: ["To show where weather stations are", "To encode classical data into quantum states", "To calculate classical wind speed", "To cool the quantum computer"],
        answer: "To encode classical data into quantum states",
        explanation: "Correct! It translates 1s and 0s into quantum rotations and phases.",
        wrongFeedback: "Incorrect. It's a translator for data encoding."
      },
      {
        question: "Which Feature Map is better for detecting relationships between different features?",
        options: ["ZFeatureMap", "ZZFeatureMap"],
        answer: "ZZFeatureMap",
        explanation: "Correct! ZZFeatureMap includes entanglement between inputs, allowing the model to see how variables interact.",
        wrongFeedback: "Incorrect. ZZ includes two-qubit interactions, whereas Z is purely single-qubit."
      },
      {
        question: "What does 'reps' refer to in the Ansatz configuration?",
        options: ["The number of qubits", "The number of times the circuit block is repeated", "The speed of the processor", "The total number of training epochs"],
        answer: "The number of times the circuit block is repeated",
        explanation: "Correct! Higher reps increase model capacity but also circuit noise.",
        wrongFeedback: "Incorrect. Reps (repetitions) determine the depth of the variational layers."
      },
      {
        question: "What is an 'Entanglement strategy'?",
        options: ["How qubits are physically wired", "The mathematical logic for connecting qubits during processing", "A way to fix quantum errors", "A backup plan for hardware failure"],
        answer: "The mathematical logic for connecting qubits during processing",
        explanation: "Correct! Strategies like 'full' or 'linear' define which qubits talk to each other.",
        wrongFeedback: "Incorrect. It defines the logical connection pattern in the circuit."
      },
      {
        question: "Which optimizer is 'derivative-free'?",
        options: ["ADAM", "SPSA", "COBYLA", "Gradient Descent"],
        answer: "COBYLA",
        explanation: "Correct! COBYLA doesn't use gradients, making it robust for noisy quantum measurements.",
        wrongFeedback: "Incorrect. ADAM and GD rely heavily on gradients. COBYLA is derivative-free."
      },
      {
        question: "What happens when you use 'full' entanglement?",
        options: ["Every qubit is entangled with every other qubit", "Only adjacent qubits are connected", "No qubits are connected", "The computer restarts"],
        answer: "Every qubit is entangled with every other qubit",
        explanation: "Correct! This creates the maximum amount of correlation but increases circuit complexity.",
        wrongFeedback: "Incorrect. Full means an all-to-all connection pattern."
      },
      {
        question: "Why might a 'deep' Ansatz (high reps) be hard to train?",
        options: ["It takes too much disk space", "It leads to 'Barren Plateaus' where gradients vanish", "It uses too much water for cooling", "The quantum gates break"],
        answer: "It leads to 'Barren Plateaus' where gradients vanish",
        explanation: "Correct! Barren plateaus make it hard for the optimizer to find the right direction for learning.",
        wrongFeedback: "Incorrect. High depth leads to vanishing gradients in quantum spaces."
      },
      {
        question: "ADAM optimizer is best known for what?",
        options: ["Being the oldest", "Adaptive learning rates for stochastic gradients", "Working without internet", "Predicting stock prices only"],
        answer: "Adaptive learning rates for stochastic gradients",
        explanation: "Correct! ADAM adjusts the learning rate for each parameter individually.",
        wrongFeedback: "Incorrect. Its strength is adaptive momentum-based optimization."
      },
      {
        question: "What is 'Angle Encoding'?",
        options: ["Measuring the wind direction", "Mapping data values to the rotation angles of quantum gates", "A way to build quantum chips", "A classical data compression technique"],
        answer: "Mapping data values to the rotation angles of quantum gates",
        explanation: "Correct! It's one of the most common ways to load numbers into a quantum circuit.",
        wrongFeedback: "Incorrect. In QML, it's about turning data into gate rotations."
      },
      {
        question: "If your model isn't learning, what's a good first parameter to check?",
        options: ["Screen brightness", "Learning rate/Optimizer selection", "Computer fan speed", "The color of the app"],
        answer: "Learning rate/Optimizer selection",
        explanation: "Correct! The optimizer and its hyper-parameters are critical for convergence.",
        wrongFeedback: "Incorrect. Always look at the mathematical tuning parameters first."
      }
    ]
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
    ),
    quizzes: [
      {
        question: "What is a 'Hybrid' model in AeroQ?",
        options: ["A model that uses gas and electricity", "A combination of Quantum and Classical processing", "A model that predicts wind and rain", "A laptop and a desktop connected"],
        answer: "A combination of Quantum and Classical processing",
        explanation: "Correct! Hybrid models combine the best of both worlds.",
        wrongFeedback: "Incorrect. It refers to the architecture of the computing hardware used."
      },
      {
        question: "What happens during 'Classical Pre-processing'?",
        options: ["Quantum measurement", "Data normalization and cleaning", "Selling weather data", "Building the UI"],
        answer: "Data normalization and cleaning",
        explanation: "Correct! We prepare the data for the quantum processor by making it uniform and noise-free.",
        wrongFeedback: "Incorrect. Pre-processing happens before quantum entry, and it's about data preparation."
      },
      {
        question: "Why use classical hardware for post-processing?",
        options: ["Because quantum computers can't output text", "To map quantum measurements back to physical speed values", "Because it's cheaper", "To save battery"],
        answer: "To map quantum measurements back to physical speed values",
        explanation: "Correct! Classical regressors are very good at scaling the probabilistic output from a quantum circuit into a final number.",
        wrongFeedback: "Incorrect. Classical logic is used to translate quantum 'noise' into physical reality."
      },
      {
        question: "What is 'PCA' in the pre-processing stage?",
        options: ["Public Cloud Access", "Principal Component Analysis", "Power Consumption Alarm", "Pressure Change Analysis"],
        answer: "Principal Component Analysis",
        explanation: "Correct! PCA is used to reduce the number of input variables while keeping the most important signals.",
        wrongFeedback: "Incorrect. PCA is a dimensionality reduction technique used classically."
      },
      {
        question: "The 'Quantum Core' of the hybrid model focuses on what?",
        options: ["Reading files", "Updating the database", "High-dimensional feature correlation", "Calculating averages"],
        answer: "High-dimensional feature correlation",
        explanation: "Correct! This is where the 'Quantum Advantage' resides.",
        wrongFeedback: "Incorrect. The quantum part handles the complex math interactions."
      },
      {
        question: "What are 'Lags' in time-series data?",
        options: ["Slow internet response", "Past values of a variable (e.g., wind speed from 1 hour ago)", "The time it takes to cool the CPU", "Errors in prediction"],
        answer: "Past values of a variable (e.g., wind speed from 1 hour ago)",
        explanation: "Correct! Using lags helps the model understand the temporal evolution of the wind.",
        wrongFeedback: "Incorrect. In forecasting, 'lag' refers to previous time-steps."
      },
      {
        question: "True or False: A hybrid approach is likely more reliable than a 100% quantum approach today.",
        options: ["True", "False"],
        answer: "True",
        explanation: "Correct! Current quantum computers are noisy; classical buffers provide stability.",
        wrongFeedback: "Incorrect. Hybrid models mitigate current quantum hardware limitations."
      },
      {
        question: "What does 'Normalization' do to your data?",
        options: ["Makes it weird", "Scales values to a standard range (e.g., 0 to 1)", "Converts it to audio", "Deletes old files"],
        answer: "Scales values to a standard range (e.g., 0 to 1)",
        explanation: "Correct! This ensures no single variable (like Temperature vs. Pressure) dominates due to its numerical scale.",
        wrongFeedback: "Incorrect. Scaling is essential for stable machine learning training."
      },
      {
        question: "Which classical regressor might be used in the final stage?",
        options: ["Lasso", "Chrome", "Spotify", "Photoshop"],
        answer: "Lasso",
        explanation: "Correct! Lasso is a common linear regressor that performs well in hybrid stacks.",
        wrongFeedback: "Incorrect. Lasso (and Ridge) are mathematical models for regression."
      },
      {
        question: "Where is the Quantum Feature Map used?",
        options: ["In pre-processing", "During the interface between classical and quantum layers", "After the model finishes", "In the database"],
        answer: "During the interface between classical and quantum layers",
        explanation: "Correct! It's the 'bridge' that translates data into quantum states.",
        wrongFeedback: "Incorrect. It maps classical inputs into the quantum Hilbert space."
      }
    ]
  }
];
