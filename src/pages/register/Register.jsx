import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <span className="appIcon">Social Media App</span>
                <span className="loginDesc">Make new friends online</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password again" className="loginInput" />
                    <button className="loginButton">Sign up</button>
                    <button className="createAccountButton">Log in to account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
