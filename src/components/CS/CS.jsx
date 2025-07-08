// src/components/CS/CS.jsx
import React, { useEffect, useRef, useState } from 'react';
import './CS.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CS = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 1500);
    });
  };

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

  return (
    <section id="CS" className="CS-container">
      <div className="CS-right">
        <div className="CS-text-wrapper">
          <p className="CS-fade-line CS-fade-line-L revealUp" ref={addToRefs}>
            고객지원
          </p>
          <p className="CS-fade-line CS-fade-line-R revealUp" ref={addToRefs}>
            고객의 작은 목소리도 놓치지 않고, 빠르고 정성껏 답변드리겠습니다.
          </p>

          <div className="CS-content-wrapper">
            {/* 왼쪽 패널 */}
            <div className="CS-left-panel">
              <h3 className="CS-title-m">연락처</h3>
              <hr className="cs-divider" />

              {/* 대표번호 */}
              <div className="CS-title-line">
                <h3 className="CS-title">대표번호</h3>
                <div className="contact-line">
                  <p>010-5240-9641</p>
                  <button
                    className="copy-btn-cs"
                    onClick={() => handleCopy('010-5240-9641', 'number1')}
                  >
                    {copiedField === 'number1' ? '복사 완료!' : '복사'}
                  </button>
                </div>
              </div>

              <div className="CS-title-line">
                <div className="contact-line">
                  <p>010-3703-8356</p>
                  <button
                    className="copy-btn-cs"
                    onClick={() => handleCopy('010-3703-8356', 'number2')}
                  >
                    {copiedField === 'number2' ? '복사 완료!' : '복사'}
                  </button>
                </div>
              </div>

              {/* 팩스 */}
              <div className="CS-title-line">
                <h3 className="CS-title">팩스</h3>
                <div className="contact-line">
                  <p>031-987-9249</p>
                  <button
                    className="copy-btn-cs"
                    onClick={() => handleCopy('031-987-9249', 'fax')}
                  >
                    {copiedField === 'fax' ? '복사 완료!' : '복사'}
                  </button>
                </div>
              </div>

              {/* 이메일 */}
              <div className="CS-title-line">
                <h3 className="CS-title">이메일</h3>
                <div className="contact-line">
                  <p>kyungil9641@hanmail.net</p>
                  <button
                    className="copy-btn-cs"
                    onClick={() => handleCopy('kyungil9641@hanmail.net', 'email')}
                  >
                    {copiedField === 'email' ? '복사 완료!' : '복사'}
                  </button>
                </div>
              </div>
            </div>

            {/* 오른쪽 패널 */}
            <div className="CS-right-panel">
              <h3 className="CS-title-m">운영 시간</h3>
              <hr className="cs-divider" />
              <p>평일 오전 9시 ~ 오후 6시</p>
              <p>토요일 오전 9시 ~ 오후 4시</p>
              <p>일요일 및 공휴일은 휴무입니다.</p>
              <p className="warning">토요일 방문을 원하시는 경우, 미리 연락 주시면 감사하겠습니다.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CS;
