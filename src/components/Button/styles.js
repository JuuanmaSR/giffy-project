import styled from "@emotion/styled";
import { Link as LinkWouter} from 'wouter'

export const Link = styled(LinkWouter)`
    display: inline-block;
    font-size: 1rem;
    padding: 1rem 2rem;
    text-decoration: none;
    box-shadow: 0 4px 4px rgb(30, 29, 29);
    border-radius: 25px;
    border: none;
    background: #0069ed;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    &:hover, &:focus {
        background-color: #0053ba;
    }
    &:active {
        transform: scale(0.99);
    }
    &:disabled {
        opacity: .3;
        pointer-events: none;
    }
`

export const Button = Link.withComponent('button')