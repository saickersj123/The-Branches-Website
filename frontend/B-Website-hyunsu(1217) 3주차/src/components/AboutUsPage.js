import React from 'react';
import 'animate.css';
import './AboutUsPage.css';

function AboutUsPage() {
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

  return (
    <div className="about-us-page">
      <h1 className="animate__animated animate__fadeInDown">BRANCHES 멤버를 소개합니다 !</h1>
      <div className="members">
        {members.map((member, index) => (
          <div key={index} className="member animate__animated animate__fadeInUp">
            <img src={member.img} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
            <p>{member.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUsPage;
