import React from "react";
import useUser from "hooks/useUser";
import { useForm } from 'react-hook-form'
import './Register.css'

const Register = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const { register: registerService, isRegistered, isRegisterLoading, hasRegisterError } = useUser()

    const onSubmit = (values) => {
        registerService(values)

    }

    if (isRegistered) {
        return <h4>Felicitaciones! Usted a sido registrado correctamente!</h4>
    }
    if (hasRegisterError) {
        return <h4>Credentials are invalid!</h4>
    }
    return <>
        <h2>Formulario de registro</h2>
        <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>

            <input
                {...register('username', {
                    required: 'This field is required',
                    minLength: { value: 4, message: 'Username length must be greater than 4' },
                    maxLength: { value: 25, message: 'Username length must be less than 25' }
                })}
                name='username'
                className={errors.username ? "error-input" : ""}
                placeholder='Username'
            />
            {errors.username && <small className="register-error-message login-error-message">{errors.username.message || errors.username.type}</small>}
            <input
                {...register('password',
                    {
                        required: 'This field is required',
                        minLength: { value: 3, message: 'Passoword length must be greater than 3' },
                        maxLength: { value: 25, message: 'Password length must be less than 25' }
                    })}
                type='password'
                name='password'
                className={errors.password ? "error-input" : ""}
                placeholder='Password'
            />
            {errors.password && <small className="register-error-message login-error-message">{errors.password.message || errors.password.type}</small>}

            <button className="button" type="submit" disabled={isRegisterLoading}>
                Registrarse
            </button>
        </form>
    </>
}

export default Register