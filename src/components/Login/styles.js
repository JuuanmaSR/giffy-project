import styled from "@emotion/styled";
import { bps } from "styles";


export const WaitingMessage = styled.div`
    color: #282C34;
    margin-bottom: 10px;
    background: #A1E4BA;
    border-radius: 20px;
    padding: 1rem 2rem;
    ${bps.smallerThanDesktop} {
        width: 1rem 1rem;
    }
`

export const ErrorMessage = styled.div`
   color: #442827;
   font-weight: bolder;
   border-radius: 20px;
   margin-bottom: 10px;
   background: #F6A7A3;
   padding: .5rem 3rem;
   ${bps.smallerThanDesktop} {
        width: 1rem 1rem;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1rem;
    align-items: center;
`

export const Input = styled.input`
    border-radius: 2px;
    padding: 1rem 1rem;
    border: none;
    font-size: 1rem;
    margin: 10px;
`