import React from "react";

const SignUp = () => {
    return (
      <header className="masthead">
        <section id="signup">
          <hr className="sign-divider-light"/>
          <h2 className="text-center mt-0 text-white">Sign Up</h2>
          <hr className="sign-divider-light" />
          <div className="text-center text-white">이미 계정이 있다면&nbsp;<a href="./signin">로그인하기</a></div><br/>
          
          <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div class="col-lg-4">
              <form id="signup">
                {/* ID input */}
                <div class="form-floating mb-3">
                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required"/>
                <label for="name">Full name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                </div>

                {/* EMAIL input */}
                <div class="form-floating mb-3">
                <input class="form-control" id="email" type="email" placeholder="Enter your Email..." data-sb-validations="required,email"/>
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                </div>

                {/* ID input */}
                <div class="form-floating mb-3">
                <input class="form-control" id="id" type="text" placeholder="Enter your ID..." data-sb-validations="required"/>
                <label for="ID">ID</label>
                <div class="invalid-feedback" data-sb-feedback="id:required">An ID is required.</div>
                </div>

                {/* PASSWORD input */}
                <div class="form-floating mb-3">
                <input class="form-control" id="password" type="text" placeholder="Enter your password..." data-sb-validations="required"/>
                <label for="password">Password</label>
                <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                </div>

                {/* SUBMIT button */}
                <div class="d-grid">
                  <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Sign Up !</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </header>
    );
};

export default SignUp;