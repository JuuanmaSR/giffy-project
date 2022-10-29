import React, { useState } from "react"
import useUser from "hooks/useUser"
import { FavButton } from "./styles"
import ModalPortal from "components/Modal"
import Login from "components/Login/Login"

const Fav = ({ id }) => {
    const { isLogged, addFav, deleteFav, favs } = useUser()
    const [showModal, setShowModal] = useState(false)
    let isFaved = favs.some(fav => fav.gifId === id)

    const handleClick = () => {
        if (!isLogged) return setShowModal(true)
        isFaved ? deleteFav({ id }) : addFav({ id })

    }
    const handleAutoClose = () => {
        if (isLogged) return setShowModal(false)
    }

    const handleClose = () => {
        return setShowModal(false)
    }

    const [
        label,
        emoji
    ] = isFaved
            ? [
                'Remove Gif from favorites',
                'em em-x'
            ] : [
                'Add Gif to favorites',
                'em em-hearts'
            ]


    return <>
        <FavButton onClick={handleClick}>
            <span aria-label={label} role='img' className={emoji}></span>
        </FavButton>
        {showModal && <ModalPortal onClose={handleClose} {...handleAutoClose()}><Login /></ModalPortal>}
    </>
}

export default Fav