import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './Members.css'; // 새로운 CSS 파일을 임포트

function Members() {
  const location = useLocation();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        const topElement = document.querySelector('#main');
        if (topElement) {
          topElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    handleHashChange(); // 컴포넌트가 마운트될 때 해시 변경 처리
    window.addEventListener('hashchange', handleHashChange); // 해시 변경 이벤트 리스너 추가

    return () => {
      window.removeEventListener('hashchange', handleHashChange); // 해시 변경 이벤트 리스너 제거
    };
  }, [location]);

  return (
    <div id="page-wrapper">
      <Header />
      <section id="main" className="container">
        <header style={{ marginTop: "50px" }}>
          <h2 style={{ marginBottom: "50px" }}>[Branches의 멤버들을 소개합니다!]</h2>
        </header>
        <div className="grid-container">
          <div className="member-profile">
            <div className="image fit"><img src="/assets/images/pic01.jpg" alt="멤버 1" /></div>
            <h3>박상진</h3>
            <p style={{ fontSize: "0.9em" }}>The Branches 대표,책임관리자</p>
          </div>
          <div className="member-profile">
            <div className="image fit"><img src="/assets/images/임애경.jpg" alt="멤버 2" /></div>
            <h3>임애경</h3>
            <p style={{ fontSize: "0.9em" }}>Html, UI/UX 개발 프론트엔드</p>
          </div>
          <div className="member-profile">
            <div className="image fit"><img src="/assets/images/황은빈.jpg" alt="멤버 3" /></div>
            <h3>황은빈</h3>
            <p style={{ fontSize: "0.9em" }}>Html, UI/UX 개발 프론트엔드</p>
          </div>
          {/* 나머지 member-profile도 같은 방식으로 이미지 경로 수정 */}
        </div>
      </section>
      <section id="meeting-place" className="container">
        <header>
          <h2>모임장소</h2>
        </header>
        <div className="meeting-place-info">
          <div className="meeting-place-image">
            <img src="/assets/images/순천대.jpg" alt="Meeting Place Image" />
            <img src="/assets/images/순천대.jpg" alt="Additional Image" />
          </div>
          <div className="meeting-place-details">
            <h3>모임 장소</h3>
            <p>602호</p>
            <h3>전화번호</h3>
            <p>010-1234-5678</p>
          </div>
        </div>
      </section>
      <section id="our-goal" className="container">
        <header>
          <h2>우리의 목표</h2>
        </header>
        <div className="box">
          <div className="content">
            <div className="inner">
              <p>저희는 다음을 이루고자 합니다:</p>
              <ol>
                {/* Add goals here */}
              </ol>
              <p>위 목표를 이루기 위해서는 다음과 같은 일을 해야 합니다:</p>
              <ul>
                {/* Add tasks here */}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id="footer">
        <div className="container">
          <div className="row">
            {/* Add footer content here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
