// src/components/Registration.js
import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Correct import
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [qrValue, setQrValue] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name && email) {
      const userData = { name, email };
      localStorage.setItem('registeredUser', JSON.stringify(userData));
      setQrValue(email);
    }
  };

  return (
    <div className="registration-container">
      <h2>Event Registration</h2>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="email" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <button onClick={handleRegister}>Register</button>
      
      {qrValue && (
        <div>
          <h3>Your QR Code</h3>
          <QRCodeSVG value={qrValue} size={200} /> {/* Updated to QRCodeSVG */}
          <br />
          <button onClick={() => navigate('/verify')}>Go to Verification</button>
        </div>
      )}
    </div>
  );
};

export default Registration;
