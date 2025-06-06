import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignUpPage from './containers/SignUpPage';
import ForgotPasswordPage from './containers/ForgotPasswordPage';
import EdukasiLukaBakar from './containers/EdukasiLukaBakar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/edukasi" element={<EdukasiLukaBakar />} />
      </Routes>
    </Router>
  );
};

export default App;
