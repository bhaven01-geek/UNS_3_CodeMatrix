import React, { Component } from "react";
import "./Login.css";
// import GoogleButton from "react-google-button";

export default class Login extends Component {
  render() {
    return (
      <div className='login-page'>
        <img src='/images/1.svg' alt='123' className='login-image' />
        <div className='login-body'>
          <div class='wrapper'>
            <div class='title-text'>
              <div class='title login'>Login</div>
              <div class='title signup'>Sign-Up</div>
            </div>
            <div class='form-container'>
              <div class='slide-controls'>
                <input type='radio' name='slide' id='login' checked />
                <input type='radio' name='slide' id='signup' />
                <label for='login' class='slide login'>
                  Login
                </label>
                <label for='signup' class='slide signup'>
                  Signup
                </label>
                <div class='slider-tab'></div>
              </div>
              <div class='form-inner'>
                <form action='#' class='login'>
                  <div class='field'>
                    <input type='text' placeholder='Email Address' required />
                  </div>
                  <div class='field'>
                    <input type='password' placeholder='Password' required />
                  </div>
                  <div class='pass-link'>
                    <a href='#'>Forgot password?</a>
                  </div>
                  <div class='field btn'>
                    <div class='btn-layer'></div>
                    <input type='submit' value='Login' />
                  </div>
                  <p className='or'>
                    <center>OR</center>
                  </p>
                  <div className='google-signin'>
                    <button
                      className='google-button'
                      onClick={() => {
                        console.log("Google button clicked");
                      }}
                    >Sign in Google</button>
                  </div>
                </form>
                <form action='#' class='signup'>
                  <div class='field'>
                    <input type='text' placeholder='Name' required />
                  </div>
                  <div class='field'>
                    <input type='text' placeholder='Email Address' required />
                  </div>
                  <div class='field'>
                    <input type='password' placeholder='Password' required />
                  </div>
                  <div class='field'>
                    <input
                      type='password'
                      placeholder='Confirm password'
                      required
                    />
                  </div>
                  <div class='field btn'>
                    <div class='btn-layer'></div>
                    <input type='submit' value='Signup' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
