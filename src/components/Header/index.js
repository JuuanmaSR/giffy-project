import React from "react"
import { Link } from "wouter"
import useUser from "hooks/useUser"
import './index.css'

const Header = () => {
    //const isLogged = false
    const { isLogged, logout } = useUser()

    const handleClick = () => {
        logout()
    }

    return (
        <header className="giffy-header">
            {
                isLogged ? <button className="nv-logout-button" onClick={handleClick}>Logout</button> :
                    <>
                    <Link to="/login">Logín</Link>
                    <Link to="/register">Register</Link>
                    </>
            }
        </header>
    )
}


export default Header