import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section id="Intro" className="Intro-container">
      <div className="floating-text">Kyungil Airshaft</div> {/* ✅ 흐르는 텍스트 추가 */}

      <div className="Intro-left">
        <p className="Intro-fade-line Intro-line-1">회사소개</p>
      </div>
      <div className="Intro-right">
        {/* 기타 콘텐츠 */}
      </div>
    </section>
  );
};

export default Intro;
