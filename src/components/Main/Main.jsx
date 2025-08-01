import React, { useState, useEffect, useRef } from 'react';
import './Main.css';

import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import slide4 from '../images/slide4.png';
import slide5 from '../images/slide5.png';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sliderImages = [slide1, slide2, slide3, slide4, slide5];

const Main = () => {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const timerRef = useRef(null);

  // 👉 GSAP reveal 애니메이션용
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    startSlider();
    return () => clearInterval(timerRef.current);
  }, []);

  const startSlider = () => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % sliderImages.length);
      setProgressKey(prev => prev + 1);
    }, 3000);
  };

  useEffect(() => {
    revealRefs.current.forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 90%",
        end: "bottom 10%",
        // markers: true,
        onEnter: () => {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
          );
        },
        onLeave: () => {
          gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
        },
        onEnterBack: () => {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: "back", overwrite: "auto" }
          );
        },
        onLeaveBack: () => {
          gsap.to(elem, { autoAlpha: 0, overwrite: "auto" });
        }
      });
    });
  }, []);

  const handleThumbnailClick = (idx) => {
    setCurrent(idx);
    setProgressKey(prev => prev + 1);
    startSlider();
  };

  return (
    <section id="Main" className="Main-container" aria-label="경일에어샤프트 메인 소개">
      <div className="Main-left">
        <h2 className="fade-line line-1 revealUp" ref={addToRefs}>
          품질로 증명하는 신뢰,
        </h2>
        <h1 className="fade-line line-2 revealUp" ref={addToRefs}>
          경일에어샤프트
        </h1>
        <p className="fade-line line-3 revealUp" ref={addToRefs}>
          30여 년간 쌓아온 기술력과 책임감으로 고객의 만족을 만듭니다.
        </p>
        <p className="fade-line line-4 revealUp" ref={addToRefs}>
          경일이 만들어내는 완성도 높은 에어샤프트 솔루션.
        </p>
      </div>

      <div className="Main-right">
        <div className="slider">
          <div className="slider-main">
            {sliderImages.map((img, idx) => (
              <img
                key={`main-img-${idx}`}
                src={img}
                alt={`고정밀 에어샤프트 제품 이미지 ${idx + 1}`}
                className={`slide-image ${current === idx ? 'active' : ''}`}
              />
            ))}
          </div>

          <div className="slider-thumbnails">
            {sliderImages.map((img, idx) => (
              <img
                key={`thumb-img-${idx}`}
                src={img}
                alt={`에어샤프트 썸네일 이미지 ${idx + 1}`}
                className={current === idx ? 'active' : ''}
                onClick={() => handleThumbnailClick(idx)}
              />
            ))}
          </div>

          <div className="slider-progress">
            <div
              key={`progress-${progressKey}`}
              className="progress-bar"
              style={{ animation: `progressAnim 3s linear` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
