import React from "react";

const Header = () => {
  return (
    <>
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
                  진단하기
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  마음일지
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  로그인
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  회원가입
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
};

export default Header;
