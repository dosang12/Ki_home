
import React, { useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="loading-container">
      <div className="loading-text">경일 에어샤프트</div>
      <div className="loading-line"></div>
    </div>
  );
};

export default LoadingScreen;
