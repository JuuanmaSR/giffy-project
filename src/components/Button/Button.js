import React from "react";
import { Button, Link } from './styles'


const styledButton = ({ children, href, onClick }) => {
    return href ?
        <Link href={href}>{children}</Link> :
        <Button onClick={onClick}>{children}</Button>
}

export default styledButton