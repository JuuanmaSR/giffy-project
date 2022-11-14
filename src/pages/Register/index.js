import React from "react";
import RegisterWithFormik from "components/Register/RegisterWithFormik";
import RegisterWithRHF from "components/Register/RegisterWithRHF";
import { Helmet } from "react-helmet";
const RegisterPage = () => {
    return <>
            <Helmet>
            <title>
                Register | Giffy
            </title>
        </Helmet>
        <h2>Formulario de registro</h2>
        <RegisterWithRHF />
    </>
}

export default RegisterPage 