import React from 'react';

const Creative = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
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
            </ul>
          </div>
        </div>
      </nav> */}

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
