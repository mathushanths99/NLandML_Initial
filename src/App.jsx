import { useState } from 'react';
import './App.css';
import NeuroLearnAcademy from './pages/DataMining/NeuroLearnAcademy.jsx';
import MathAnswers from './pages/NeuralNetworks/Home.jsx';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [activeModule, setActiveModule] = useState(null);

  if (activeModule === 'nn_ml') {
    return (
      <>
        <div className="module-wrapper">
          <button className="back-button" onClick={() => setActiveModule(null)}>
            &larr; Back to Home
          </button>
          <MathAnswers />
        </div>
        <Analytics />
      </>
    );
  }

  if (activeModule === 'data_mining') {
    return (
      <>
        <div className="module-wrapper">
          <button className="back-button" onClick={() => setActiveModule(null)}>
            &larr; Back to Home
          </button>
          <NeuroLearnAcademy />
        </div>
        <Analytics />
      </>
    );
  }

  if (activeModule === 'applied_ds') {
    return (
      <>
        <div className="module-wrapper">
          <button className="back-button" onClick={() => setActiveModule(null)}>
            &larr; Back to Home
          </button>
          <div className="coming-soon">
            <div className="coming-soon-content">
              <div className="icon">🔬</div>
              <h2>Applied Data Science</h2>
              <p>This module is currently under construction. Please check back later!</p>
            </div>
          </div>
        </div>
        <Analytics />
      </>
    );
  }

  return (
    <>
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-header">
            <h1 className="landing-title">Select Your Module</h1>
            <p className="landing-subtitle">Choose a path to begin your learning journey.</p>
          </div>
          
          <div className="landing-grid">
            <div className="landing-card nn-card" onClick={() => setActiveModule('nn_ml')}>
              <div className="card-icon">🧠</div>
              <h2>Neural Network &amp; Machine Learning</h2>
              <p>Master mathematical foundations and advanced algorithms.</p>
              <div className="card-arrow">&rarr;</div>
            </div>

            <div className="landing-card dm-card" onClick={() => setActiveModule('data_mining')}>
              <div className="card-icon">📊</div>
              <h2>Data Mining</h2>
              <p>Uncover patterns, processes, and knowledge from data.</p>
              <div className="card-arrow">&rarr;</div>
            </div>

            <div className="landing-card ads-card" onClick={() => setActiveModule('applied_ds')}>
              <div className="card-icon">🔬</div>
              <h2>Applied Data Science</h2>
              <p>Apply analytical techniques to real-world datasets.</p>
              <div className="card-arrow">&rarr;</div>
            </div>
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
