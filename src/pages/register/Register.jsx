import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

export default function Register() {
    const userNameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordAgainRef = useRef()
    const history = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (passwordAgainRef.current.value !== passwordRef.current.value) {
            passwordAgainRef.current.setCustomValidity("Passwords dont match!")
        } else {
            const userObj = {
                userName: userNameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            try {
                await axios.post("/auth/register", userObj)
                history("/")
            } catch (err) {
                console.log(err)
            }
        }
    }

    const redirectToLogin = () => {
        history("/")
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <span className="appIcon">Social Media App</span>
                    <span className="loginDesc">Make new friends online</span>
                </div>
                <form className="loginRight" onSubmit={handleSubmit}>
                    <div className="loginBox">
                        <input placeholder="Username"
                            ref={userNameRef}
                            required
                            className="loginInput" />
                        <input placeholder="Email"
                            type="email"
                            ref={emailRef}
                            required
                            className="loginInput" />
                        <input placeholder="Password"
                            type="password"
                            ref={passwordRef}
                            required
                            minLength="6"
                            className="loginInput" />
                        <input placeholder="Password again"
                            type="password"
                            ref={passwordAgainRef}
                            required
                            className="loginInput" />
                        <button className="loginButton" type="submit">Sign up</button>
                        <button className="createAccountButton"
                            onClick={redirectToLogin}>
                            Log in to account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
