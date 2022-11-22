import useGifs from '../../hooks/useGifs'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import LazyTrending from 'components/TrendingSearches/index'
import SearchForm from "components/SearchForm"
import { Helmet } from "react-helmet"

const Home = () => {
    const { gifs } = useGifs()

    return (
        <>
            <Helmet>
                <title>
                    Home | Giffy
                </title>
            </Helmet>
            <SearchForm/>
            <h3>Últimas busquedas</h3>
            <ListOfGifs gifs={gifs} />

            <div className='app-category'>
                <LazyTrending />
            </div>
        </>
    )
}



export default Home