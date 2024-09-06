// src/Components/Registration/Login.js

import React from "react";
import "./Login.css";
import logoIcon from '../../Assets/logo.png';

function Login() {
  return (
    <>
      <div className="background"></div>
      <div className="login-container">
        <form className="login-form">
        <div className="title-container">
            <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
            <h1 className="register-title">
              <span className="brand">Go</span>Green
            </h1>
          </div>
          <h2 className="welcome-message">Welcome Back</h2>

          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            id="username"
            placeholder="abc@gmail.com"
            className="input-field"
          />

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password123@"
            className="input-field"
          />

          <label htmlFor="security-text" className="form-label">
            Security Text
          </label>
          <div className="captcha-container">
            <input
              type="text"
              id="security-text"
              placeholder="Enter the shown text"
              className="input-field"
            />
            <img src="captcha.png" alt="captcha" className="captcha-image" />
            <button className="refresh-captcha">&#8635;</button>
          </div>

          <div className="remember-container">
            <input type="checkbox" id="remember-me" className="checkbox" />
            <label htmlFor="remember-me" className="remember-label">
              Remember me on this computer
            </label>
          </div>

          <button type="submit" className="login-button">
            LOG IN
          </button>

          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </form>
      </div>
    </>
  );
}

export default Login;
