import React, { useState } from "react";
import registerService from "services/register";
import { Formik, Form, Field, ErrorMessage } from 'formik'

const initialValues = {
    username: '',
    password: ''
}

const validateFields = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required username'
    }
    if (!values.password) {
        errors.password = 'Required password'
    } else if (values.password.length < 3) {
        errors.password = 'Length must be grater than 3'
    }
    return errors
}

const Register = () => {
    const [registered, setRegistered] = useState(false)

    if (registered) {
        return <h4>Felicitaciones! Usted a sido registrado correctamente!</h4>
    }

    return <>
        <h2>Formulario de registro</h2>
        <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={(values, { setFieldError }) => {
                return registerService(values)
                    .then(() => {
                        setRegistered(true)
                    })
                    .catch(() => {
                        setFieldError('username', 'This username is not valid')
                    })
            }}
        >
            {
                ({ errors, isSubmitting }) =>
                    <Form className="loginForm" >
                        <Field name='username' className={errors.username ? "error-input" : ""} placeholder='Username' />

                        <ErrorMessage name="username" component="small" className="register-error-message" />

                        <Field type='password' name='password' className={errors.password ? "error-input" : ""} placeholder='Password' />

                        <ErrorMessage name="password" component="small" className="register-error-message" />

                        <button className="button" type="submit" disabled={isSubmitting}>
                            Registrarse
                        </button>
                    </Form>
            }
        </Formik>
    </>
}


export default Register