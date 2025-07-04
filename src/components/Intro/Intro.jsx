import React from 'react';
import './Intro.css';
import introImage from '../images/Intro.png'; // ✅ 이미지 import

const Intro = () => {
  return (
    <section id="Intro" className="Intro-container">
      <div className="floating-text">Kyungil Airshaft</div>

      <div className="Intro-left">
        <p className="Intro-fade-line Intro-fade-line-L Intro-line-1">회사소개</p>
      </div>

      <div className="Intro-right">
        <div className="Intro-text-wrapper"> {/* ✅ 수직 정렬용 래퍼 */}
          <p className="Intro-fade-line Intro-fade-line-R Intro-line-2">
            당사는 경기 김포시에 위치한 30년 전통의 에어샤프트 전문 제작 및 수리업체로서
          </p>
          <p className="Intro-fade-line Intro-fade-line-R Intro-line-3">
            고객 맞춤형 설계와 고정밀 생산 기술로 업계에서 신뢰받는 파트너로 자리 잡았습니다.
          </p>
          <p className="Intro-fade-line Intro-fade-line-R Intro-line-4">
            축적된 기술력과 품질 관리 시스템을 바탕으로 다양한 산업 현장에 최적화된 솔루션을 제공하며, 
            앞으로도 지속적인 기술 혁신과 고객 만족을 위해 끊임없이 노력하겠습니다.  
          </p>

          {/* ✅ 이미지 삽입 */}
          <img src={introImage} alt="회사소개 이미지" className="Intro-bottom-image" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
