import React from "react";

const SignUp = () => {
    return (
      <header className="masthead">
        <section id="signup">
          <h2 className="text-center mt-0">Sign Up</h2>
          <hr className="divider" /> <br></br>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="name"
              type="text"
              placeholder="Enter your name..."
              data-sb-validations="required"
            />
            <label for="name">Full name</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">
              A name is required.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="email"
              type="email"
              placeholder="name@example.com"
              data-sb-validations="required,email"
            />
            <label for="email">Email address</label>
            <div class="invalid-feedback" data-sb-feedback="email:required">
              An email is required.
            </div>
            <div class="invalid-feedback" data-sb-feedback="email:email">
              Email is not valid.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="phone"
              type="tel"
              placeholder="(123) 456-7890"
              data-sb-validations="required"
            />
            <label for="phone">Phone number</label>
            <div class="invalid-feedback" data-sb-feedback="phone:required">
              A phone number is required.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="id"
              type="text"
              placeholder="Enter your ID..."
              data-sb-validations="required"
            />
            <label for="name">ID</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">
              An ID is required.
            </div>
          </div>
          <div class="form-floating mb-3">
            <input
              class="form-control"
              id="password"
              type="text"
              placeholder="Enter your Password..."
              data-sb-validations="required"
            />
            <label for="name">Password</label>
            <div class="invalid-feedback" data-sb-feedback="name:required">
              A password is required.
            </div>
          </div>
          <div class="d-grid">
            <button id="submitButton" type="submit">
              Submit
            </button>
          </div>
          <p>
            이미 계정이 있으시다면 <a href="#signin">로그인하기</a>{" "}
          </p>
        </section>
      </header>
    );
};

export default SignUp;