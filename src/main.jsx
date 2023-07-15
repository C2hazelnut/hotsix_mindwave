import React from "react";
import "./styles.css"; // CSS 파일을 임포트하여 스타일을 적용할 수 있습니다.

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          마음의 파도
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Masthead() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1
              className="text-white font-weight-bold"
              style={{ fontSize: "30px" }}
            >
              거친 마음의 파도에 휩쓸리고 있다면
            </h1>
            <hr className="divider" style={{ color: "cornflowerblue" }} />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              집착, 의존, 불안, 두려움, 분노, 고립, 엄격한 기준으로
              고통받고있나요? <br />
              테스트를 통해 당신이 빠진 심리적 덫의 원인과 해결책을 알려드릴게요
            </p>
            <a className="btn btn-primary btn-xl" href="#about">
              테스트 시작하기
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">We've got what you need!</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">
              Start Bootstrap has everything you need to get your new website up
              and running in no time! Choose one of our open source, free to
              download, and easy to use themes! No strings attached!
            </p>
            <a className="btn btn-light btn-xl" href="#services">
              Get Started!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-gem fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Sturdy Themes</h3>
              <p className="text-muted mb-0">
                Our themes are updated regularly to keep them bug free!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-laptop fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Up to Date</h3>
              <p className="text-muted mb-0">
                All dependencies are kept current to keep things fresh.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-globe fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Ready to Publish</h3>
              <p className="text-muted mb-0">
                You can use this design as is, or you can make changes!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-heart fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Made with Love</h3>
              <p className="text-muted mb-0">
                Is it really open source if it's not made with love?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">{/* 포트폴리오 항목들 */}</div>
      </div>
    </div>
  );
}

function CallToAction() {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
        <a
          className="btn btn-light btn-xl"
          href="https://startbootstrap.com/theme/creative/"
        >
          Download Now!
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">{/* 연락처 내용 */}</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">
          © 2023 - Company Name
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Masthead />
      <About />
      <Services />
      <Portfolio />
      <CallToAction />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
