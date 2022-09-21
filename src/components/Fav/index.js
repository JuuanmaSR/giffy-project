import React from "react"
import { useLocation } from 'wouter'
import useUser from "hooks/useUser"
import './index.css'
const Fav = ({ id }) => {
    const { isLogged, addFav, favs } = useUser()
    const [_, navigate] = useLocation()

    const isFaved = favs.some(fav =>  fav.gifId === id)

    const handleClick = () => {
        if (!isLogged) return navigate('/login')
        // isFaved ? deleteFav({ id })
        addFav({ id })

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


    return <button className="fav-button" onClick={handleClick}>
        <span aria-label={label} role='img' className={emoji}></span>
    </button>
}

export default Fav