import React, { useEffect, useRef } from 'react';
import './Intro.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    revealRefs.current.forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 90%",
        end: "bottom 10%",
        // markers: true, // 개발 중 디버깅용
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

  return (
    <section id="Intro" className="Intro-container">
      <div className="floating-text">Kyungil Airshaft</div>

      <div className="Intro-right">
        <div className="Intro-text-wrapper">
          <p
            className="Intro-fade-line Intro-fade-line-L Intro-line-1 revealUp"
            ref={addToRefs}
          >
            회사소개
          </p>
          <p
            className="Intro-fade-line Intro-fade-line-R Intro-line-2 revealUp"
            ref={addToRefs}
          >
            고객 맞춤형 설계와 고정밀 생산 기술로 신뢰받는 파트너가 되겠습니다.
          </p>
          <p
            className="Intro-fade-line Intro-fade-line-R Intro-line-3 revealUp"
            ref={addToRefs}
          >
            당사는 경기 김포시에 위치한, 30년 전통의 에어샤프트 전문 제작 및 수리 기업입니다.
          </p>
          <p
            className="Intro-fade-line Intro-fade-line-R Intro-line-4 revealUp"
            ref={addToRefs}
          >
            축적된 기술력과 체계적인 품질 관리 시스템을 바탕으로 다양한 산업 현장에 최적화된 솔루션을 제공하고 있으며,
            앞으로도 지속적인 기술 혁신과 고객 만족을 위해 끊임없이 노력하겠습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
