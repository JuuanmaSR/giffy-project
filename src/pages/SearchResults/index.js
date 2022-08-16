/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react'
import ListOfGifs from "components/ListOfGifs/ListOfGifs"
import Spinner from "components/Spinner"
import useGifs from "hooks/useGifs"
import useNearScreen from "hooks/useNearScreen"
import debounce from 'just-debounce-it'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false })
    /*
    const handleNextPage = () => {
       setPage(prevPage => prevPage + 1)
    }
    */
    //const handleNextPage = () => console.log('next page')
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage()
    }, [isNearScreen, debounceHandleNextPage])

    return (
        <>
            {loading ? <Spinner /> : <>
                <h3 className="app-title">{decodeURI(keyword)}</h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
            }
        </>
    )
}


export default SearchResults