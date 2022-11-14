import styled from "@emotion/styled";
import { bps } from "styles";

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1rem;
    ${bps.smallerThanDesktop}{
        flex-direction: column;
        justify-content: space-between;
    }
`

export const Input = styled.input`
    border-radius: 2px;
    padding: 1rem 1rem;
    border: none;
    font-size: 1rem;
    ${bps.smallerThanDesktop}{
        margin-bottom: 6px;
    }
`

export const Select = styled.select`
    border-radius: 2px;
    margin-left: 8px;
    padding: 1rem 1rem;
    border: none;
    font-size: 1rem;
    ${bps.smallerThanDesktop} {
        margin-bottom: 6px;
        margin-left: 0;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    width: 250px;
`