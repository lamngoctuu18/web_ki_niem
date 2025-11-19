import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import WelcomePage from './components/WelcomePage';
import MainWebsite from './components/MainWebsite';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    setShowWelcome(true);
  };

  const handleWelcomeContinue = () => {
    setShowWelcome(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowWelcome(false);
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  // Show welcome page after login
  if (showWelcome) {
    return <WelcomePage onContinue={handleWelcomeContinue} />;
  }

  // Show main website with navigation
  return <MainWebsite onLogout={handleLogout} />;
}

export default App;
