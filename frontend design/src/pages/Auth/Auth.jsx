import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>PostBook</h1>
          <h4> Share your thoughts with the entire world</h4>
        </div>
      </div>
      {/* <SignUp /> */}
      <LogIn/>
    </div>
  );
};
// funtion for login form
function LogIn() {
  return (
    <div className="a-right">
      <form className="info-form auth-form">
        <h2>Log In</h2>

        <div>
          <input
            type="text"
            placeholder="User Name"
            className="infoInput"
            name="userName"
          />
        </div>

        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>

        <div>
            <span style={{ fontSize: "12px" }}>
              Don't have an account? <b>Sign up</b>
            </span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
}
//function for Sign up form

function SignUp() {
  return (
    <div className="a-right">
      <form action="" className="info-form auth-form">
        <h2>Sign up</h2>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastName"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="User-name"
            name="userName"
          />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="infoInput"
          />
          <input
            type="text"
            name="confirm-password"
            placeholder="Confirm Password"
            className="infoInput"
          />
        </div>
        <div>
          <span style={{fontSize:'13px'}}>
            Already have an account? <b>Login </b>
          </span>
        </div>
        <button className="button info-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Auth;
