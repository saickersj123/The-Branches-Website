import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Home.css'; // CSS 파일을 임포트합니다.

function Home() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div id="page-wrapper">
      <Header>
        <div className="inner">
          <header>
            <h1><a href="/" id="logo">[The Branches]</a></h1>
            <hr />
            <p>Branches는 순천대학교 인공지능공학부 전공 동아리로</p>
            <p>코딩 스터디, 프로젝트 개발, 공모전 참여에 열정적으로 임하는 학생 동아리 입니다.</p>
          </header>
          <footer>
            <button className="button circled scrolly" onClick={() => handleScroll('banner')}>start</button>
          </footer>
        </div>
      </Header>
      <section id="banner">
        <header>
          <h2><strong>[Branches</strong>의 궁금증 !]</h2>
          <p>자주 묻는 질문</p>
        </header>
      </section>
      <section className="carousel">
        <div className="reel">
          <article>
            <a href="#!" className="image featured" onClick={() => handleImageClick('/assets/images/pic01.jpg')}>
              <img src="/assets/images/pic01.jpg" alt="Study topic 1" />
            </a>
            <header>
              <h3><span className="link-style">Q. 어떤 스터디를 위주로 공부하나요 ?</span></h3>
            </header>
            <p>A. 주로 팀별로 개별프로젝트를 진행하고 있습니다. 팀원들끼리 궁금한 분야가 있는것을 모아 스터디를 진행하기도 합니다!</p>
          </article>
          <article>
            <a href="#!" className="image featured" onClick={() => handleImageClick('/assets/images/pic02.jpg')}>
              <img src="/assets/images/pic02.jpg" alt="Study topic 2" />
            </a>
            <header>
              <h3><span className="link-style">Q. 인공지능공학부 학생만 참여 가능하나요 ?</span></h3>
            </header>
            <p>A. 네 저희는 인공지능공학부 학과 동아리로 학과 이름에 걸맞게 AI분야에 대한 확산공부를 배우고 있습니다!</p>
          </article>
          <article>
            <a href="#!" className="image featured" onClick={() => handleImageClick('/assets/images/질문1.jpg')}>
              <img src="/assets/images/질문1.jpg" alt="Study topic 3" />
            </a>
            <header>
              <h3><span className="link-style">Q. 동아리 활동은 어떤 방식으로 진행되나요 ?</span></h3>
            </header>
            <p>A. 정기 모임과 비정기적인 프로젝트 활동을 통해 진행됩니다.</p>
          </article>
          <article>
            <a href="#!" className="image featured" onClick={() => handleImageClick('/assets/images/질문2.jpg')}>
              <img src="/assets/images/질문2.jpg" alt="Study topic 4" />
            </a>
            <header>
              <h3><span className="link-style">Q. 참여하려면 어떻게 해야 하나요 ?</span></h3>
            </header>
            <p>A. 동아리 대표에게 연락하시거나, 모임기간에 지원해주시길 바랍니다</p>
          </article>
          <article>
            <a href="#!" className="image featured" onClick={() => handleImageClick('/assets/images/질문3.jpg')}>
              <img src="/assets/images/질문3.jpg" alt="Study topic 5" />
            </a>
            <header>
              <h3><span className="link-style">Q. 프로젝트는 주로 어떤 것을 하나요 ?</span></h3>
            </header>
            <p>A. 웹 사이트 개발이나 GPT,피그마 디자인 등 다양한 프로젝트를 진행하고 있습니다.</p>
          </article>
          <article>
            <a href="#!" className="image featured" onClick={() => handleImageClick('/assets/images/질문4.jpg')}>
              <img src="/assets/images/질문4.jpg" alt="Study topic 6" />
            </a>
            <header>
              <h3><span className="link-style">Q. 초보자도 참여할 수 있나요 ?</span></h3>
            </header>
            <p>A. 네, 초보자도 참여할 수 있으며, 기초부터 차근차근 배울 수 있습니다.</p>
          </article>
        </div>
      </section>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Modal" />
        </div>
      )}
      <section className="contact-section">
        <h2>[Branches 문의]</h2>
        <div className="contact-cards">
          <div className="contact-card">
            <h3>순천대학교</h3>
            <p>20224256@scnu.ac.kr</p>
            <img src="/assets/images/sun.jpg" alt="순천대학교 이미지" className="card-image" />
            <button className="contact-button" onClick={() => window.open('https://www.scnu.ac.kr', '_blank', 'noreferrer')}>순천대학교로 이동하기</button>
          </div>
          <div className="contact-card">
            <h3>디스코드</h3>
            <p>Discord.com</p>
            <img src="/assets/images/discord.jpg" alt="디스코드 이미지" className="card-image" />
            <button className="contact-button" onClick={() => window.open('https://discord.com', '_blank', 'noreferrer')}>디스코드로 문의하기</button>
          </div>
          <div className="contact-card">
            <h3>노션</h3>
            <p>Notion.com</p>
            <img src="/assets/images/notion.jpg" alt="노션 이미지" className="card-image" />
            <button className="contact-button" onClick={() => window.open('https://www.notion.so', '_blank', 'noreferrer')}>notion으로 이동하기</button>
          </div>
          <div className="contact-card">
            <h3>깃허브</h3>
            <p>Github.com</p>
            <img src="/assets/images/github.jpg" alt="깃허브 이미지" className="card-image" />
            <button className="contact-button" onClick={() => window.open('https://github.com', '_blank', 'noreferrer')}>Git hub 구경하기</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
