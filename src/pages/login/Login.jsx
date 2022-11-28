import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../../context/AuthContext/AuthContext'
import { loginCall } from '../../api/LoginApi'
import { CircularProgress } from '@mui/material'
import './login.css'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const emailRef = useRef()
    const passRef = useRef()
    const { user, fetching, error, dispatch } = useContext(AuthContext)
    const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        loginCall(dispatch, {
            email: emailRef.current.value,
            password: passRef.current.value
        })

        // if(user !== null && error === false){
        //     console.log(user);
        //     <Navigate to="/home" />
        // }
    }

    const redirectToRegister = () => {
        return history("/register")
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <span className="appIcon">Social Media App</span>
                    <span className="loginDesc">Make new friends online</span>
                </div>
                <form onSubmit={handleSubmit} className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email"
                            type="email"
                            required
                            ref={emailRef}
                            name="email"
                            // onChange={inputChangeHandler}
                            className="loginInput" />
                        <input placeholder="Password"
                            type="password"
                            required
                            ref={passRef}
                            name="password"
                            // onChange={inputChangeHandler}
                            minLength="6"
                            className="loginInput" />
                        <button type="submit" className="loginButton" disabled={fetching}>
                            {fetching ? <CircularProgress color="inherit" size={20} /> : "Log In"}
                        </button>
                        <span className="forgotPassword">Forgot password?</span>
                        <button className="createAccountButton"
                                onClick={redirectToRegister} 
                                disabled={fetching}>
                            {fetching ? <CircularProgress color="inherit" size={20} /> : "Create Account"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
