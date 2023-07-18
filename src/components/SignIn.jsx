import React from "react";

const SignIn = () => {
    return (
      <header className="masthead">
        <section id="signin">
          <hr className="sign-divider-light"/>
          <h2 className="text-center mt-0 text-white">Sign In</h2>
          <hr className="sign-divider-light" /> 
          <div className="text-center text-white"> 만약 계정이 없다면&nbsp;<a href="./signup">회원가입하기</a></div><br/>
          
          <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div class="col-lg-4">
              <form id="login" data-sb-form-api-token="API-TOKEN">
                {/* ID input */}
                <div class="form-floating mb-3">
                  <input class="form-control " id="id" type="text" placeholder="Enter your ID…" data-sb-validations="required"/>
                  <label for="id">ID</label>
                  <div class="invalid-feedback" data-sb-feedback="id:required">A ID is required.</div>
                </div>
                {/* PASSWORD input */}
                <div class="form-floating mb-3">
                  <input class="form-control" id="password" type="text" placeholder="Enter your Password…" data-sb-validations="required"/>
                  <label for="password">Password</label>
                  <div class="invalid-feedback" data-sb-feedback="password:required">A password is required.</div>
                </div>

                {/* SUBMIT button */}
                <div class="d-grid">
                  <button class="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Login</button>
                </div>
             </form> 
            </div>
          </div>
        </section>
      </header>
    );
};

export default SignIn;
