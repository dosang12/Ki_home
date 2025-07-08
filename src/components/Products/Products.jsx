import React, { useEffect, useRef, useState } from 'react';
import './Products.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const mapContainerRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // ✅ 복사 상태 관리
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 1500);
    });
  };

  // ✅ GSAP reveal 애니메이션
  useEffect(() => {
    revealRefs.current.forEach((elem) => {
      ScrollTrigger.create({
        trigger: elem,
        start: 'top 90%',
        end: 'bottom 10%',
        onEnter: () => {
          gsap.fromTo(
            elem,
            { y: 100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: 'back', overwrite: 'auto' }
          );
        },
        onLeave: () => {
          gsap.to(elem, { autoAlpha: 0, overwrite: 'auto' });
        },
        onEnterBack: () => {
          gsap.fromTo(
            elem,
            { y: -100, autoAlpha: 0 },
            { duration: 1.25, y: 0, autoAlpha: 1, ease: 'back', overwrite: 'auto' }
          );
        },
        onLeaveBack: () => {
          gsap.to(elem, { autoAlpha: 0, overwrite: 'auto' });
        },
      });
    });
  }, []);

  // ✅ 카카오맵 로드
  useEffect(() => {
    const checkKakaoMapLoaded = () => {
      return new Promise((resolve, reject) => {
        let count = 0;
        const maxRetry = 20;
        const interval = setInterval(() => {
          if (window.kakao && window.kakao.maps && window.kakao.maps.load) {
            clearInterval(interval);
            resolve();
          } else {
            count++;
            if (count > maxRetry) {
              clearInterval(interval);
              reject('카카오맵 SDK 로드 실패');
            }
          }
        }, 100);
      });
    };

    checkKakaoMapLoaded()
      .then(() => {
        window.kakao.maps.load(() => {
          const container = document.querySelector('.kakaomap');
          const options = {
            center: new window.kakao.maps.LatLng(37.61631838442207, 126.62067437669495),
            level: 3,
          };
          const map = new window.kakao.maps.Map(container, options);

          new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(37.61631838442207, 126.62067437669495),
          });

          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
          }, 300);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const address = '경기 김포시 양촌읍 황금로 117 양촌지방산업단지 E블럭 1롯트 메카존 제나동비 131호';
  const phone = '010-5240-9641';

  return (
    <section id="Products" className="Products-container">
      <div className="floating-text">Kyungil Airshaft</div>

      <div className="Products-right">
        <div className="Products-text-wrapper">
          <p
            className="Products-fade-line Products-fade-line-L revealUp"
            ref={addToRefs}
          >
            오시는길
          </p>
          <p
            className="Products-fade-line Products-fade-line-R revealUp"
            ref={addToRefs}
          >
            보다 편리하게 방문하실 수 있도록 위치 정보를 안내드립니다.
          </p>

          <div className="Products-map-wrapper">
            <div className="map">
              <div className="kakaomap" ref={mapContainerRef}></div>
       </div>

<div className="mapright">
  <h3 className="maptextSub">경일에어샤프트 오시는 길</h3>
  <p className="maptext">{address}</p>

  <div className="button-grid">
    <button
      onClick={() => handleCopy(address, 'address')}
      className="copy-btn"
    >
      {copiedField === 'address' ? '복사 완료!' : '주소 복사'}
    </button>
    <a
      className="naver"
      href="https://naver.me/x9zoNVPy"
      target="_blank"
      rel="noopener noreferrer"
    >
      네이버 지도 보기
    </a>
    <a
      className="tmap"
      href="https://tmap.life/1e5a7205"
      target="_blank"
      rel="noopener noreferrer"
    >
      T맵으로 보기
    </a>
  </div>

  <h3 className="maptext2">전화번호</h3>
  <p className="maptext">{phone}</p>
 <div className="button-grid">
    <button
      onClick={() => handleCopy(phone, 'phone')}
      className="copy-btn"
    >
      {copiedField === 'phone' ? '복사 완료!' : '전화 복사'}
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
