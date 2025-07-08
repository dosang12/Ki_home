import React, { useState } from 'react';
import './GNB.css';
import logo from '../images/logo.png';

const GNB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
<nav className="gnb">
  <div className="gnb-wrapper">
    <div className="gnb-logo">
      <a href="#Main" className="logo-l">
        <img src={logo} alt="로고" className="logo-image" />
        <span className="logo-text">경일에어샤프트</span>
      </a>
    </div>

    <div className="gnb-hamburger" onClick={handleToggle}>
      {isOpen ? '✕' : '☰'}
    </div>

    <div className={`gnb-menu ${isOpen ? 'open' : ''}`}>
      <a href="#Intro" onClick={handleToggle}>회사소개</a>
      <a href="#Products" onClick={handleToggle}>오시는길</a>
      <a href="#CS" onClick={handleToggle}>고객지원</a>
      <a href="#CS" onClick={handleToggle}>문의하기</a>
    </div>
  </div>
  
      <div className={`gnb-menu-slide ${isOpen ? 'open' : ''}`}>
        <div className="gnb-menu-logo">
          <img src={logo} alt="로고" className="slide-logo-image" />
          <span className="slide-logo-text">경일에어샤프트</span>
        </div>
        <a className='slideone' href="#Intro" onClick={handleToggle}>회사소개</a>
        <a href="#Products" onClick={handleToggle}>오시는길</a>
        <a href="#CS" onClick={handleToggle}>고객지원</a>
        <a href="#CS" onClick={handleToggle}>문의하기</a>
      </div>
    </nav>
  );
};

export default GNB;
