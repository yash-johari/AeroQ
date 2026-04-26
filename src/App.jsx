import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Auth from './pages/Auth/Auth';
import Profile from './pages/Profile/Profile';
import Update from './pages/Update/Update';
import Predictor from './pages/Predictor/Predictor';
import ModelConfig from './pages/ModelConfig/ModelConfig';
import Learning from './pages/Learning/Learning';
import ModelExplanation from './pages/ModelExplanation/ModelExplanation';
import Recommendation from './pages/Recommendation/Recommendation';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/update" element={<Update />} />
            <Route path="/predictor" element={<Predictor />} />
            <Route path="/config" element={<ModelConfig />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/explanation" element={<ModelExplanation />} />
            <Route path="/recommendation" element={<Recommendation />} />
            {/* Fallback for undefined routes */}
            <Route path="*" element={<Landing />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
