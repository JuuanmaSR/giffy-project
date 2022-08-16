import { useContext, useState, useEffect } from "react"
import getGifs from "../services/getGifs"
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

const useGifs = ({ keyword } = { keyword: null }) => {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const { gifs, setGifs } = useContext(GifsContext)


    useEffect(() => {
        setLoading(true)
        // Se recupera keyword de localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                // Se guarda keyword en localStorage
                localStorage.setItem('lastKeyword', keyword)

            })
    }, [keyword, setGifs])

    useEffect(() => {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        // Se recupera keyword de localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
        getGifs({ keyword: keywordToUse, page })
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })
    }, [page, keyword, setGifs])

    return { loading, loadingNextPage, gifs, setPage }
}


export default useGifs