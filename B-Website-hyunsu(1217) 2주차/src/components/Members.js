import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import './Members.css'; // 새로운 CSS 파일을 임포트

const members = [
  { name: '박상진', role: 'The Branches 대표,책임관리자', img: '/assets/images/member1.jpg', age: 24, message: '안녕하세요, 대표 박상진입니다.' },
  { name: '임애경', role: 'Html, UI/UX 개발 프론트엔드', img: '/assets/images/임애경.jpg', age: 22, message: '안녕하세요, 프론트엔드 개발자 임애경입니다.' },
  { name: '황은빈', role: 'Html, UI/UX 개발 프론트엔드', img: '/assets/images/황은빈.jpg', age: 22, message: '안녕하세요, 프론트엔드 개발자 황은빈입니다.' },
  { name: '김기호', role: 'Backend 개발', img: '/assets/images/pic01.jpg', age: 23, message: '안녕하세요, 백엔드 개발자 김기호입니다.' },
  { name: '김현서', role: 'Backend 개발', img: '/assets/images/member2.jpg', age: 22, message: '안녕하세요, 백엔드 개발자 김현서입니다.' },
  { name: '지윤', role: '마크디자인', img: '/assets/images/pic01.jpg', age: 23, message: '안녕하세요, 마크디자인 담당 지윤입니다.' },
  { name: '노현수', role: 'Backend 개발', img: '/assets/images/member3.jpg', age: 22, message: '안녕하세요, 백엔드 개발자 노현수입니다.' },
  { name: '문정진', role: 'Backend 개발', img: '/assets/images/pic01.jpg', age: 24, message: '안녕하세요, 백엔드 개발자 문정진입니다.' },
  { name: '이종엽', role: '프론트엔드', img: '/assets/images/member4.jpg', age: 25, message: '안녕하세요, 프론트엔드 개발자 이종엽입니다.' }
];

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
          {members.map((member, index) => (
            <div className="member-profile" key={index}>
              <div className="image fit">
                <img src={member.img} alt={`멤버 ${index + 1}`} />
                <div className="member-info">
                  <p>나이: {member.age}</p>
                  <p>{member.message}</p>
                </div>
              </div>
              <h3>{member.name}</h3>
              <p style={{ fontSize: "0.9em" }}>{member.role}</p>
            </div>
          ))}
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
            <p>D4 6층 602호</p>
            <h3>동아리 문의</h3>
            <p>010-8701-7954</p>
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
                <li>AI 경진대회를 나가 수상받기</li>
                <li>각 프로젝트에 참여해 포트폴리오 만들기</li>
                <li>협력성을 기르며 조별과제에 익숙해지기</li>
                <li>주차마다 꾸준히 프로젝트보고로 습관기르기</li>
              </ol>
              <p>위 목표를 이루기 위해서는 다음과 같은 일을 해야 합니다:</p>
              <ul>
                <li>AI에 대한 개념, 학습하는 이유에 대한 목표 세우기</li>
                <li>빠지지 않고 열심히 자신의 역할에 맞게 프로젝트 개발하기</li>
                <li>힘든일이 있어도 조원과 함께 이겨내기</li>
                <li>중간점검, 최종점검으로 주에 2번씩 프로젝트 보고하기</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div id="footer">
        <div className="container">
          <div className="row">
            {/* Contact */}
            <section className="contact">
              <header>
                <h3>The Branches SNS</h3>
              </header>
              <ul className="icons">
                <li>
                  <a href="https://www.scnu.ac.kr/" target="_blank" className="icon solid fa-university">
                    <span className="label">University Website</span>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/QMg4Dr9W" target="_blank" className="icon brands fa-discord">
                    <span className="label">Discord</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.notion.so/ko-kr" target="_blank" className="icon solid fa-file-alt">
                    <span className="label">Notion</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/" target="_blank" className="icon brands fa-github">
                    <span className="label">GitHub</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Members;
