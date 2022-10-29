import React from "react"
import logo from '../../logo.png'
import Button from "components/Button/Button"
import { Header as StyledHeader, HeaderImg } from "./styles"
import useUser from "hooks/useUser"

const Header = () => {
    //const isLogged = false
    const { isLogged, logout } = useUser()

    const handleClick = () => {
        logout()
    }

    return (
        <StyledHeader>
            <Button to="/">
                <HeaderImg alt='Giffy Logo' src={logo} />
            </Button>
            {
                isLogged ? <Button onClick={handleClick}>Logout</Button> :
                    <>
                        <div>
                            <Button to="/login">Logín</Button>
                            <Button to="/register">Register</Button>
                        </div>

                    </>
            }
        </StyledHeader>
    )
}


export default Header