import React from "react";
import { Button, Link } from './styles'


const styledButton = ({ children, to, onClick }) => {
    return to ?
        <Link to={to}>{children}</Link> :
        <Button onClick={onClick}>{children}</Button>
}

export default styledButton