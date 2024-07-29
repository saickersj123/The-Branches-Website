import React from 'react';
import './Footer.css'; // CSS 파일을 가져옵니다

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="row">
          {/* 동아리 정보 */}
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
          {/* 게시물 */}
          <section className="col-4 col-12-mobile">
            <header>
              <h2 className="icon solid fa-file circled"><span className="label">Posts</span></h2>
            </header>
            <ul className="divided">
              <li>
                <article className="tweet">
                  <header>
                    <h3><a href="#">동아리 정기 회의 : 매달 마지막 주 수요일</a></h3>
                  </header>
                  <span className="timestamp">상황에 따라 시간 변경 가능</span>
                </article>
              </li>
              <li>
                <article className="tweet">
                  <header>
                    <h3><a href="#">프로잭트 활동 시간 : 매주 1회 2시간</a></h3>
                  </header>
                  <span className="timestamp">프로젝트를 진행하는 팀에 따라 시간 상이</span>
                </article>
              </li>
              <li>
                <article className="tweet">
                  <header>
                    <h3><a href="#">스터디 발표 : 2주에 1번씩 발표</a></h3>
                  </header>
                  <span className="timestamp">상세일정은 추후에 변동될수 있음</span>
                </article>
              </li>
              <li>
                <article className="tweet">
                  <header>
                    <h3><a href="#">활동 방식 : 대면, 비대면 모두 가능</a></h3>
                  </header>
                  <span className="timestamp">대면시, 주로 동아리방 사용하고 비대면시 디스코드 주로 사용</span>
                </article>
              </li>
            </ul>
          </section>
          {/* 사진 */}
          <section className="col-4 col-12-mobile">
            <header>
              <h2 className="icon solid fa-camera circled"><span className="label">Photos</span></h2>
            </header>
            <div className="row gtr-25">
              <div className="col-6">
                <a href="#" className="image fit"><img src="assets/images/discord.jpg" alt="" /></a>
              </div>
              <div className="col-6">
                <a href="#" className="image fit"><img src="assets/images/sun.jpg" alt="" /></a>
              </div>
              <div className="col-6">
                <a href="#" className="image fit"><img src="assets/images/github.jpg" alt="" /></a>
              </div>
              <div className="col-6">
                <a href="#" className="image fit"><img src="assets/images/notion.jpg" alt="" /></a>
              </div>
              <div className="col-6">
                <a href="#" className="image fit"><img src="assets/images/discord.jpg" alt="" /></a>
              </div>
              <div className="col-6">
                <a href="#" className="image fit"><img src="assets/images/sun.jpg" alt="" /></a>
              </div>
            </div>
          </section>
        </div>
        <hr />
        <div className="row">
          <div className="col-12">
            {/* 연락처 */}
            <section className="contact">
              <header>
                <h3>The Branches SNS</h3>
              </header>
              <ul className="icons">
                <li><a href="https://www.scnu.ac.kr/" target="_blank" className="icon solid fa-university"><span className="label">University Website</span></a></li>
                <li><a href="https://discord.gg/QMg4Dr9W" target="_blank" className="icon brands fa-discord"><span className="label">Discord</span></a></li>
                <li><a href="https://www.notion.so/ko-kr" target="_blank" className="icon solid fa-file-alt"><span className="label">Notion</span></a></li>
                <li><a href="https://github.com/" target="_blank" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
