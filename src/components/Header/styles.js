import styled from "@emotion/styled";

const primaryColor = (props) => props.theme.colors.primary
const primaryHeaderColor = (props) => props.theme.header.primary
export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${primaryHeaderColor};
    padding: 10px;
    
`

export const HeaderImg = styled.img`
    width: 1rem;
    min-width: 60px;
    border-radius: 60px;
    object-fit: contain;
    &:hover {
        box-shadow: 1px 1px 2px ${primaryColor};
        cursor: pointer;
    }
`