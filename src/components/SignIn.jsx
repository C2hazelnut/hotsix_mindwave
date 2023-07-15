import React from "react";

const SignIn = () => {
  return (
    
    <section id='signin'>
      
        <h2 className="text-center mt-0">Sign In</h2>
        <hr className="divider" /> <br></br>

        <div class="form-floating mb-3">
          <input class="form-control" id="id" type="text" placeholder="Enter your ID…" data-sb-validations="required" />
          <label for="name">ID</label>
          <div class="invalid-feedback" data-sb-feedback="name:required">An ID is required.</div>
        </div>

        <div class="form-floating mb-3">
          <input class="form-control" id="password" type="text" placeholder="Enter your Password…" data-sb-validations="required" />
          <label for="name">Password</label>
          <div class="invalid-feedback" data-sb-feedback="name:required">A password is required.</div>
        </div>

        <div class="d-grid"><button id="submitButton" type="submit">Login</button></div>
        <p>만약 계정이 없다면  <a href="#signup">회원가입하기</a> </p>

      </section>
  );
};

export default SignIn;
