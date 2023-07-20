import React, { useState } from 'react';

const SignIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log('회원가입 정보:');
    console.log('아이디:', id);
    console.log('비밀번호:', password);
  }

    return (
      <header className="masthead">
        <section id="signin">
          <hr className="sign-divider-light"/>
          <h2 className="text-center mt-0 text-white">Sign In</h2>
          <hr className="sign-divider-light" /> 
          <div className="text-center text-white"> 만약 계정이 없다면&nbsp;<a href="./signup">회원가입하기</a></div><br/>
          
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-4">
              <form id="login">
                {/* ID input */}
                <div className="form-floating mb-3">
                  <input className="form-control " id="id" type="text" placeholder="Enter your ID…" value={id} onChange={(e) => setId(e.target.value)} required/>
                  <label htmlFor="id">ID</label>
                </div>
                
                {/* PASSWORD input */}
                <div className="form-floating mb-3">
                  <input className="form-control" id="password" type="password" placeholder="Enter your Password…" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                  <label htmlFor="password">Password</label>
                </div>

                {/* SUBMIT button */}
                <div className="d-grid">
                  <button onClick={handleSignUp} className="btn btn-primary btn-xl" id="submitButton" type="submit">Login</button>
                </div>
             </form> 
            </div>
          </div>
        </section>
      </header>
    );
};


export default SignIn;
