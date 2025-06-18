import React, { useState, useEffect, useRef } from 'react';
import './Main.css';

import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';

const sliderImages = [slide1, slide2, slide3, slide4, slide5];

const Main = () => {
  const [current, setCurrent] = useState(0);
  const [key, setKey] = useState(0); // 프로그래스 바 초기화용
  const timerRef = useRef(null); // 타이머 ref

  const startSlider = () => {
    // 기존 타이머 제거
    if (timerRef.current) clearInterval(timerRef.current);

    // 새 타이머 설정
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % sliderImages.length);
      setKey(prev => prev + 1); // progress 바도 새로 시작
    }, 3000);
  };

  useEffect(() => {
    startSlider(); // 마운트 시 타이머 시작
    return () => clearInterval(timerRef.current); // 언마운트 시 정리
  }, []);

  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    setKey(prev => prev + 1); // progress bar 재시작
    startSlider(); // 타이머도 재시작
  };

  return (
    <section id="Main" className="Main-container">
      <div className="Main-left">
        <p className="fade-line line-1">품질로 증명하는 신뢰,</p>
        <p className="fade-line line-2">경일에어샤프트</p>
        <p className="fade-line line-3">30여 년간 쌓아온 기술력과 책임감으로 고객의 만족을 만듭니다.</p>
        <p className="fade-line line-4">경일이 만들어내는 완성도 높은 에어샤프트 솔루션.</p>
      </div>
      <div className="Main-right">
        <div className="slider">
          <div className="slider-main">
            {sliderImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`슬라이드 ${idx}`}
                className={`slide-image ${current === idx ? 'active' : 'inactive'}`}
              />
            ))}
          </div>
          <div className="slider-thumbnails">
            {sliderImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`썸네일 ${idx + 1}`}
                className={current === idx ? 'active' : ''}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </div>
          <div className="slider-progress">
            <div
              key={key}
              className="progress-bar"
              style={{ animation: 'progressAnim 3s linear' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
