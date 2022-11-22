import useUser from "hooks/useUser"
import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useLocation } from "wouter"
import { ErrorMessage, WaitingMessage, LoginForm, Input, FormButton as Button } from "./styles"
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
            <WaitingMessage>
                <strong>Felicitaciones! Usted ha iniciado sesión con exito!</strong>
            </WaitingMessage>
        }
        {isLoginLoading &&
            <WaitingMessage>
                <strong>Checking credentials...</strong>
            </WaitingMessage>
        }
        {hasLoginError &&
            <ErrorMessage>
                <strong>Credentials are invalid</strong>
            </ErrorMessage>
        }
        {!isLoginLoading &&
            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register('username', {
                        required: 'This field is required',
                        minLength: { value: 4, message: 'Username length must be greater than 4' },
                        maxLength: { value: 25, message: 'Username length must be less than 25' }
                    })}
                    name='username'
                    className={errors.username ? "error-input" : ''}
                    placeholder='Username'
                />
                {errors.username && <ErrorMessage >{errors.username.message || errors.username.type}</ErrorMessage>}
                <Input
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
                {errors.password && <ErrorMessage>{errors.password.message || errors.password.type}</ErrorMessage>}

                <Button id="login-form-button" disabled={isLoginLoading}>Logín</Button>

            </LoginForm>
        }
    </>

}


export default Login