//import useGifs from 'hooks/useGifs'
import { useContext, useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'
import Context from 'context/GifsContext'

const useSingleGif = ({ id }) => {
    const { gifs } = useContext(Context)
    const gifsFromCache = gifs.find(singleGif => singleGif.id === id)
    const [gif, setGifs] = useState(gifsFromCache)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        if (!gif) {
            setIsLoading(true)
            // se llamara al servicio si no existe un gif
            getSingleGif({ id })
                .then(gif => {
                    setGifs(gif)
                    setIsLoading(false)
                    setIsError(false)
                })
                .catch(error => {
                    setIsLoading(false)
                    setIsError(true)
                })
        }
    }, [gif, id])

    return { gif, isLoading, isError }
}


export default useSingleGif
