import React from "react"
import logo from '../../logo.png'
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
            <Link to="/">
                <img className='app-logo' alt='Giffy Logo' src={logo} />
            </Link>
            {
                isLogged ? <button className="nv-logout-button" onClick={handleClick}>Logout</button> :
                    <>
                        <div>
                            <Link to="/login">Logín</Link>
                            <Link to="/register">Register</Link>
                        </div>

                    </>
            }
        </header>
    )
}


export default Header