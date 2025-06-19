import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ setLoading }) => {
  const [fadeOut, setFadeOut] = useState(false);

useEffect(() => {
  const fadeTimer = setTimeout(() => setFadeOut(true), 1800);  // fade-out 시작
  const removeTimer = setTimeout(() => setLoading(false), 2500); // 실제 제거는 그 뒤
  return () => {
    clearTimeout(fadeTimer);
    clearTimeout(removeTimer);
  };
}, []);

  return (
    <div className={`loading-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-text">경일 에어샤프트</div>
      <div className="loading-line"></div>
    </div>
  );
};

export default LoadingScreen;
