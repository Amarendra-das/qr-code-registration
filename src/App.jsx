// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './components/Registration';
import Verification from './components/Verification';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>QR Code Registration and Verification System</h1>
        
        {/* Backdrop shadow */}
        <div className="backdrop"></div>

        {/* Navigation Links */}
        <nav>
          <Link to="/">Register</Link> | <Link to="/verify">Verify</Link>
        </nav>

        {/* Main Container for Registration and Verification */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Registration />} />
            <Route path="/verify" element={<Verification />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
