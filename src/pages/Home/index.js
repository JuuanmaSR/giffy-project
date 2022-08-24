import { useLocation } from "wouter"
import { useCallback } from 'react'
import useGifs from '../../hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import LazyTrending from 'components/TrendingSearches/index'
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"

const Home = () => {
    const [path, pushLocation] = useLocation()

    const { gifs } = useGifs()

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${(keyword)}`)
    }, [pushLocation])

    

    return (
        <>
            <Helmet>
                <title>
                    Home | Giffy
                </title>
            </Helmet>
            <SearchForm
                onSubmit={handleSubmit}
            />
            <h3>Última busquedas</h3>
            <ListOfGifs gifs={gifs} />

            <div className='app-category'>
                <LazyTrending />
            </div>
        </>
    )
}



export default Home