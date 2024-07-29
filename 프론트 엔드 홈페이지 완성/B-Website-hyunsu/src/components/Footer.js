import React, { useState } from 'react';
import './Footer.css';

function Footer() {
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          <section className="col-4 col-12-mobile">
            <header>
              <h2 className="icon brands fa-discord circled"><span className="label">Discord</span></h2>
            </header>
            <ul className="divided">
              <li>
                <article className="tweet">
                  동아리 명 : The branches
                </article>
              </li>
              <li>
                <article className="tweet">
                  동아리 장소 : 순천대학교 공대 3호관 602호
                </article>
              </li>
              <li>
                <article className="tweet">
                  담당 교수님 : 순천대학교 조용운 교수님
                </article>
              </li>
              <li>
                <article className="tweet">
                  동아리 조장 : 정보통신공학과 박상진
                </article>
              </li>
            </ul>
          </section>
          <section className="col-4 col-12-mobile">
            <header>
              <h2 className="icon solid fa-file circled"><span className="label">Posts</span></h2>
            </header>
            <ul className="divided">
              <li>
                <article className="tweet">
                  <header>
                    <h3><span className="link-style">동아리 정기 회의 : 매달 마지막 주 수요일</span></h3>
                  </header>
                  <span className="timestamp">상황에 따라 시간 변경 가능</span>
                </article>
              </li>
              <li>
                <article className="tweet">
                  <header>
                    <h3><span className="link-style">프로잭트 활동 시간 : 매주 1회 2시간</span></h3>
                  </header>
                  <span className="timestamp">프로젝트를 진행하는 팀에 따라 시간 상이</span>
                </article>
              </li>
              <li>
                <article className="tweet">
                  <header>
                    <h3><span className="link-style">스터디 발표 : 2주에 1번씩 발표</span></h3>
                  </header>
                  <span className="timestamp">상세일정은 추후에 변동될수 있음</span>
                </article>
              </li>
              <li>
                <article className="tweet">
                  <header>
                    <h3><span className="link-style">활동 방식 : 대면, 비대면 모두 가능</span></h3>
                  </header>
                  <span className="timestamp">대면시, 주로 동아리방 사용하고 비대면시 디스코드 주로 사용</span>
                </article>
              </li>
            </ul>
          </section>
          <section className="col-4 col-12-mobile">
            <header>
              <h2 className="icon solid fa-camera circled"><span className="label">Photos</span></h2>
            </header>
            <div className="row gtr-25">
              <div className="col-6">
                <a href="#!" className="image fit" onClick={() => handleImageClick('assets/images/discord.jpg')}><img src="assets/images/discord.jpg" alt="Discord" /></a>
              </div>
              <div className="col-6">
                <a href="#!" className="image fit" onClick={() => handleImageClick('assets/images/sun.jpg')}><img src="assets/images/sun.jpg" alt="Sun" /></a>
              </div>
              <div className="col-6">
                <a href="#!" className="image fit" onClick={() => handleImageClick('assets/images/github.jpg')}><img src="assets/images/github.jpg" alt="GitHub" /></a>
              </div>
              <div className="col-6">
                <a href="#!" className="image fit" onClick={() => handleImageClick('assets/images/notion.jpg')}><img src="assets/images/notion.jpg" alt="Notion" /></a>
              </div>
              <div className="col-6">
                <a href="#!" className="image fit" onClick={() => handleImageClick('assets/images/discord.jpg')}><img src="assets/images/discord.jpg" alt="Discord" /></a>
              </div>
              <div className="col-6">
                <a href="#!" className="image fit" onClick={() => handleImageClick('assets/images/sun.jpg')}><img src="assets/images/sun.jpg" alt="Sun" /></a>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            <section className="contact">
              <header>
                <h3>The Branches SNS</h3>
              </header>
              <ul className="icons">
                <li><a href="https://www.scnu.ac.kr/" target="_blank" rel="noreferrer" className="icon solid fa-university"><span className="label">University Website</span></a></li>
                <li><a href="https://discord.gg/QMg4Dr9W" target="_blank" rel="noreferrer" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
                <li><a href="https://www.notion.so/ko-kr" target="_blank" rel="noreferrer" className="icon solid fa-file-alt"><span className="label">Notion</span></a></li>
                <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={modalImage} alt="Modal" />
        </div>
      )}
    </div>
  );
}

export default Footer;
