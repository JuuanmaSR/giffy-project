import useUser from "hooks/useUser"
import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [_, navigate] = useLocation()
    const { login, isLogged, isLoginLoading, hasLoginError } = useUser()

    useEffect(() => {
        if (isLogged) {
            navigate('/')
        }
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ username, password })
        //navigate('/')
    }

    const handleUsernameChange = evt => {
        setUsername(evt.target.value)
    }

    const handlePasswordChange = evt => {
        setPassword(evt.target.value)
    }
    return (
        <>
            {isLoginLoading &&
                <div className="login-waiting-message">
                    <strong>Checking credentials...</strong>
                </div>
            }
            {hasLoginError &&
                <div className="login-error-message">
                    <strong>Credentials are invalid</strong>
                </div>
            }
            {!isLoginLoading &&
                <form onSubmit={handleSubmit} className='loginForm'>
                    <input placeholder="Username" value={username} onChange={handleUsernameChange} />
                    <input placeholder="Password" type='password' value={password} onChange={handlePasswordChange} />
                    <button>Logín</button>

                </form>
            }


        </>
    )
}


export default Login