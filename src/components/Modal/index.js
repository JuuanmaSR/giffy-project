import React from "react";
import ReactDOM from "react-dom";
import { ModalButton, ModalContainer, ModalContent } from "./styles";

const Modal = ({ children, onClose }) => {
    return <ModalContainer>
        <ModalContent>
            <ModalButton onClick={onClose}>X</ModalButton>
            {children}
        </ModalContent>
    </ModalContainer>
}

const ModalPortal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>{children}</Modal>,
        document.getElementById('modal-root')
    )
}
export default ModalPortal