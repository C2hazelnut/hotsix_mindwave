import React from 'react';

const Creative = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav" >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#page-top">마음의 파도</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto my-2 my-lg-0">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#signup">Sign Up</a></li>
              <li className="nav-item"><a className="nav-link" href="#signin">Sign In</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold" style={{ fontSize: '30px' }}>거친 마음의 파도에 휩쓸리고 있다면</h1>
              <hr className="divider" style={{ color: 'cornflowerblue' }} />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">집착, 의존, 불안, 두려움, 분노, 고립, 엄격한 기준으로 고통받고있나요? <br />테스트를 통해 당신이 빠진 심리적 덫의 원인과 해결책을 알려드릴게요</p>
              <a className="btn btn-primary btn-xl" href="#about">테스트 시작하기</a>
            </div>
          </div>
        </div>
      </header>

      <section className="page-section bg-primary" id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-black mt-0">About...</h2>
              <hr className="divider" />
              <p className="text-black-75 mb-4">
                자신을 차갑게 대하는 사람들과의 관계에 반복적으로 빠져드나요?<br></br><br></br>
                가까운 사람들조차 자신을 충분히 이해하거나 돌보지 않는다고 느끼나요?<br></br><br></br>
                스스로가 결함이 있는 사람처럼 느껴져 누구에게도 사랑받지 못할 것이라고 믿나요?<br></br><br></br>
                남의 욕구를 내 욕구보다 우선하여 자신의 욕구 충족을 미루고 있나요?<br></br><br></br>
                뭔가 나쁜 일이 일어날 것만 같아 두렵나요?<br></br><br></br>
                아무리 인정받거나 성취를 해도 여전히 자신은 불행하고 무가치하며 그럴 자격이 없다고 느끼나요?<br></br><br></br><br></br><br></br>

                우리는 이러한 패턴들을 "삶의 덫"이라고 부릅니다.
                <br></br><br></br><br></br>
                우리는 테스트를 통해 사람들이 가장 흔히 빠져드는 11가지 덫에 대해서
                스스로를 진단해보겠습니다.
              </p><br></br>
              <a className="btn btn-light btn-xl" href="#services">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-0">At Your Service</h2>
          <hr className="divider" />
          <div className="row gx-4 gx-lg-5">
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-gem fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Sturdy Themes</h3>
                <p className="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Up to Date</h3>
                <p className="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-globe fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Ready to Publish</h3>
                <p className="text-muted mb-0">You can use this design as is, or you can make changes!</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 text-center">
              <div className="mt-5">
                <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Made with Love</h3>
                <p className="text-muted mb-0">Is it really open source if it's not made with love?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="portfolio">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                <img className="img-fluid" src="assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                <img className="img-fluid" src="assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                <img className="img-fluid" src="assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                <img className="img-fluid" src="assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                <img className="img-fluid" src="assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                <div className="portfolio-box-caption">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-sm-6">
              <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                <img className="img-fluid" src="assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                <div className="portfolio-box-caption p-3">
                  <div className="project-category text-white-50">Category</div>
                  <div className="project-name">Project Name</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="page-section bg-dark text-white" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="text-center mt-5">
            <h2 className="display-4">Contact</h2>
            <hr className="divider divider-light" />
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">Phone</h4>
                  <p className="text-muted">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-contact mb-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div className="text-center">
                  <h4 className="text-white">Email</h4>
                  <p className="text-muted">info@yourwebsite.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <footer className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="small text-center text-muted">마음의 파도 &copy; Your Website {new Date().getFullYear()}</div>
        </div>
      </footer>
    </>
  );
};

export default Creative;
