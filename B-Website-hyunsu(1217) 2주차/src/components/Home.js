import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Home() {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
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
          <h2> <strong>[Branches</strong>의 궁금증 !]</h2>
          <p>자주 묻는 질문</p>
        </header>
      </section>
      <section className="carousel">
        <div className="reel">
          <article>
            <a href="#" className="image featured"><img src="/assets/images/pic01.jpg" alt="" width="368" height="256" /></a>
            <header>
              <h3><a href="#">Q. 어떤 스터디를 위주로 공부하나요 ?</a></h3>
            </header>
            <p>A.정확히 정해진 스터디는 따로 없고, 코딩을 하는데에 필요하다고 생각하는 스터디를 진행합니다.</p>
          </article>
          <article>
                    <a href="#" class="image featured"><img src="/assets/images/pic02.jpg" alt="" width="368" height="256" /></a>
                    <header>
                        <h3><a href="#">Q.인공지능공학부 학생만 참여 가능하나요 ?</a></h3>
                    </header>
                    <p>A.아니요 IT관련 학과가 아니더라도 원하고자하는 목표가 있으면 모두 참여 가능합니다.</p>
                </article>
          {/* 나머지 article들도 같은 방식으로 이미지 경로 수정 */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
