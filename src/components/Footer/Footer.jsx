import React from 'react';
import './Footer.css';
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <footer className="footer-container" aria-label="경일에어샤프트 오시는 길 안내">
      <div className="footer-logo">
      <img src={logo} alt="회사 로고" className="에어샤프트 footer-logo" />
      </div>
      <div className="footer-info-group">
        <p>경기 김포시 양촌읍 황금로 117 양촌지방산업단지 E블럭 1롯트 메카존 제나동 비 131호</p>
        <span className="divider">|</span>
        <p>대표자 : 오근승</p>
        <span className="divider">|</span>
        <p>사업자등록번호 : 136-09-74143</p>
      </div>
      <div className="footer-info-group">
        <p>전화 : 010-5240-9641 / 010-3703-8356</p>
        <span className="divider">|</span>
        <p>팩스 : 031-987-9249</p>
        <span className="divider">|</span>
        <p>이메일 : kyungil9641@hanmail.net</p>
      </div>
      <div className="footer-copy">
        Copyright © 2025 Kyungil Airshaft Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
