import useUser from "hooks/useUser"
import React, { useEffect, useState } from "react"
import { useLocation } from "wouter"
import './index.css'
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
            <h2>Login</h2>
            {isLoginLoading && <strong>Checking credentials...</strong>}
            {!isLoginLoading &&
                <form onSubmit={handleSubmit} className='loginForm'>
                    <input placeholder="username" value={username} onChange={handleUsernameChange} />
                    <input placeholder="password" type='password' value={password} onChange={handlePasswordChange} />
                    <button>Logín</button>

                </form>
            }
            {hasLoginError &&
                <strong>Credentials are invalid</strong>
            }

        </>
    )
}


export default Login