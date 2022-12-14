/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react'
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import Spinner from "components/Spinner"
import useGifs from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

const SearchResults = ({ params }) => {
    const { keyword, rating = 'g', language = 'en' } = params
    const { loading, gifs, setPage } = useGifs({ keyword, rating, language })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })

    const title = gifs ? `${gifs.length} Resultados de ${decodeURI(keyword)} ` : ''

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])

    return (
        <>

            {loading ? <Spinner /> :
                <>
                    <Helmet>
                        <title>
                            {title}
                        </title>
                        <meta name='description' content={title}>

                        </meta>
                    </Helmet>
                    <SearchForm
                    initialKeyword={keyword}
                    initialRating={rating}
                    initialLanguage={language}
                    />
                    <h3 className="app-title">{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </>
            }
        </>
    )
}


export default SearchResults