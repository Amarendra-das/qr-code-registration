// src/components/Verification.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserMultiFormatReader } from '@zxing/library';

const Verification = () => {
  const [verificationResult, setVerificationResult] = useState('');
  const navigate = useNavigate();

  const startScan = () => {
    const codeReader = new BrowserMultiFormatReader();
    codeReader.decodeFromInputVideoDevice(undefined, 'video').then(result => {
      // Get registered user from localStorage
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

      // Compare scanned QR code data with stored user email
      if (registeredUser && result.text === registeredUser.email) {
        setVerificationResult(`Entry allowed: ${registeredUser.name}`);
      } else {
        setVerificationResult('Invalid QR code.');
      }
    }).catch(err => {
      console.error(err);
      setVerificationResult('Error scanning QR code.');
    });
  };

  return (
    <div className="verification-container">
      <h2>QR Code Verification</h2>
      <button onClick={startScan}>Start Scan</button>
      <video id="video" width="300" height="200"></video>
      {verificationResult && <h3>{verificationResult}</h3>}
      <button onClick={() => navigate('/')}>Back to Registration</button>
    </div>
  );
};

export default Verification;
