import React from "react";
import Login from "components/Login/Login";
import { Helmet } from "react-helmet";

const LoginPage = () => {
    return <>
        <Helmet>
            <title>
                Login | Giffy
            </title>
        </Helmet>
        <h2>Login</h2>
        <Login />
    </>
}

export default LoginPage