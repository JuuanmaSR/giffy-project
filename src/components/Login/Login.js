import useUser from "hooks/useUser"
import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useLocation } from "wouter"
import './Login.css'

const Login = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { login: loginService, isLogged, isLoginLoading, hasLoginError } = useUser()
    const [_, navigate] = useLocation()

    useEffect(() => {
        if (isLogged) {
            const timeout = setTimeout(() => {
                navigate('/')
            }, 3000)
            return () => clearTimeout(timeout)
        }
    }, [isLogged, navigate])

    const onSubmit = (values) => {
        loginService(values)
    }

    return <>
        {isLogged &&
            <div className="login-waiting-message">
                <strong>Felicitaciones! Usted ha iniciado sesión con exito!</strong>
            </div>
        }
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
            <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
                <input
                    {...register('username', {
                        required: 'This field is required',
                        minLength: { value: 4, message: 'Username length must be greater than 4' },
                        maxLength: { value: 25, message: 'Username length must be less than 25' }
                    })}
                    name='username'
                    className={errors.username ? "error-input" : ''}
                    placeholder='Username'
                />
                {errors.username && <small className="login-error-message">{errors.username.message || errors.username.type}</small>}
                <input
                    {...register('password', {
                        required: 'This field is required',
                        minLength: { value: 3, message: 'Password length must be greater than 3' },
                        maxLength: { value: 25, message: 'Password length must be less than 25' }
                    })}
                    name='password'
                    type='password'
                    className={errors.password ? "error-input" : ''}
                    placeholder='Password'
                />
                {errors.password && <small className="login-error-message">{errors.password.message || errors.password.type}</small>}

                <button className="button" disabled={isLoginLoading}>Logín</button>

            </form>
        }
    </>

}


export default Login