import React from "react";
import { Link } from "react-router-dom";

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
                  <Link to="/about">진단하기</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  <Link to="/services">마음일지</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  <Link to="/signin">로그인</Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  <Link to="/signup">회원가입</Link>
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
