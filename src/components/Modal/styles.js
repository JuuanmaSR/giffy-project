import styled from "@emotion/styled";
import { Button } from "components/Button/styles";
import { bps } from "styles";

export const ModalContainer = styled.div`
    background-color: rgba(255, 255, 255, .8);
    backdrop-filter: blur(5px);
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    ${bps.smallerThanDesktop} {
        height: 100%;
    }
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #282C34;
    width: 300px;
    padding: 10px 20px;
    height: 60vh;
    margin: 10vh auto;
    position: relative;
    border-radius: 16px;
    align-items: center;
`

export const ModalButton = styled(Button)`
    display: block;
    position: absolute;
    top: -20px;
    border-radius: 50%;
    padding: 10px 15px; 
    cursor: pointer;
    font-weight: bolder;
`