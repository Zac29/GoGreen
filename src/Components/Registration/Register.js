import React from "react";
import "./Register.css"; 
import logoIcon from '../../Assets/logo.png'; 
import googleIcon from '../../Assets/google.png'; 


function Register() {
  return (
    <>
      <div className="background"></div>
      <div className="register-container">
        <form className="register-form">
          <div className="title-container">
            <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
            <h1 className="register-title">
              <span className="brand">Go</span>Green
            </h1>
          </div>
          <h2 className="welcome-message">Welcome</h2>

          <label htmlFor="full-name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            placeholder="Zac"
            className="input-field"
            required
          />

          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Zac@gmail.com"
            className="input-field"
            required
          />

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password123@"
            className="input-field"
            required
          />

          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Password123@"
            className="input-field"
            required
          />

          <label htmlFor="security-text" className="form-label">
            Security Text
          </label>
          <div className="captcha-container">
            <input
              type="text"
              id="security-text"
              placeholder="Enter the shown text"
              className="input-field security-text"
              required
            />
            <img src="captcha.png" alt="captcha" className="captcha-image" />
            <button type="button" className="refresh-captcha">
              &#8635;
            </button>
          </div>

          <div className="remember-container">
            <input type="checkbox" id="remember-me" className="checkbox" />
            <label htmlFor="remember-me" className="remember-label">
              Remember me on this computer
            </label>
          </div>

          <button type="submit" className="register-button">
            SIGNUP
          </button>

          <button type="button" className="google-register">
            <img src={googleIcon} alt="Google Icon" className="google-icon" /> Login With Google
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
