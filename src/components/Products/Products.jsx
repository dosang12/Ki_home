import React, { useEffect, useRef } from 'react';
import './Products.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const mapRef = useRef(null); // 지도 div를 위한 ref

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
        end: "bottom 15%",
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

  // ✅ 카카오 맵 렌더링
useEffect(() => {
  if (window.kakao && window.kakao.maps && mapRef.current) {
    window.kakao.maps.load(() => { // ⬅️ autoload=false 있어야 호출됨
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.6026190371828, 126.7172253482),
        level: 3,
      };

      const map = new window.kakao.maps.Map(container, options);

      const markerPosition = new window.kakao.maps.LatLng(37.6026190371828, 126.7172253482);
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);
    });
  }
}, []);

  return (
    <section id="Products" className="Products-container">
      <div className="floating-text">Kyungil Airshaft</div>

      <div className="Products-right">
        <div className="Products-text-wrapper">
          <p
            className="Products-fade-line Products-fade-line-L Products-line-1 revealUp"
            ref={addToRefs}
          >
            오시는길
          </p>
          <p
            className="Products-fade-line Products-fade-line-R Products-line-2 revealUp"
            ref={addToRefs}
          >
            보다 편리하게 방문하실 수 있도록 위치 정보를 안내드립니다.
          </p>
          <div className="map revealUp" ref={addToRefs}>
            <div className="kakaomap" ref={mapRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
