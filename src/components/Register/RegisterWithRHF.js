import React, { useEffect } from "react";
import useUser from "hooks/useUser";
import { useForm } from 'react-hook-form'
import { useLocation } from 'wouter'
import { ErrorMessage, WaitingMessage, LoginForm as RegisterForm, Input, FormButton as Button } from "components/Login/styles";

const Register = () => {

    const { handleSubmit, register, formState: { errors } } = useForm()
    const { register: registerService, isRegistered, isRegisterLoading, hasRegisterError } = useUser()
    const [, navigate] = useLocation()
    const onSubmit = (values) => {
        registerService(values)

    }
    useEffect(() => {
        if (isRegistered) {
            const timeout = setTimeout(() => {
                navigate('/login')
            }, 3000);

            return () => clearTimeout(timeout);
        }

    }, [isRegistered, navigate]);



    return <>
        {isRegistered &&
            <WaitingMessage>
                <strong>Felicitaciones! Usted ha sido registrado con exito!</strong>
            </WaitingMessage>
        }
        {isRegisterLoading &&
            <WaitingMessage >
                <strong>Checking credentials...</strong>
            </WaitingMessage>
        }
        {hasRegisterError &&
            <ErrorMessage>
                <strong>Credentials are invalid</strong>
            </ErrorMessage>
        }
        {!isRegisterLoading &&
            <RegisterForm onSubmit={handleSubmit(onSubmit)}>

                <Input
                    {...register('username', {
                        required: 'This field is required',
                        minLength: { value: 4, message: 'Username length must be greater than 4' },
                        maxLength: { value: 25, message: 'Username length must be less than 25' }
                    })}
                    name='username'
                    className={errors.username ? "error-input" : ""}
                    placeholder='Username'
                />
                {errors.username && <ErrorMessage className="login-error-message">{errors.username.message || errors.username.type}</ErrorMessage>}
                <Input
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
                {errors.password && <ErrorMessage className="login-error-message">{errors.password.message || errors.password.type}</ErrorMessage>}

                <Button type="submit" disabled={isRegisterLoading}>
                    Registrarse
                </Button>
            </RegisterForm>
        }

    </>
}

export default Register