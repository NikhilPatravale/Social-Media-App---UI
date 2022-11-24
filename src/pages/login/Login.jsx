import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <span className="appIcon">Social Media App</span>
                <span className="loginDesc">Make new friends online</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="forgotPassword">Forgot password?</span>
                    <button className="createAccountButton">Create Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
