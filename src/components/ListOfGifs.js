import { useState, useEffect } from "react"
import getGifs from "../services/getGifs"
import Gif from "./Gif"

const ListOfGifs = ({ params }) => {
    const [loading, setLoading] = useState(false)
    const { keyword } = params
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setLoading(false)
                setGifs(gifs)
            })
    }, [keyword])

    // Loading text
    if (loading) {
        return(
            <i className="loading-text">Cargando ...</i>
        )
    }
    return (
        gifs.map(({ id, title, url }) => {
            return <Gif
                id={id}
                key={id}
                title={title}
                url={url}
            />
        })
    )
}

export default ListOfGifs