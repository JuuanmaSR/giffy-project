import React, { useState, useRef, useEffect, Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner'

const TrendingSearches = React.lazy(
    () => import('./TrendingSearches')
)

const LazyTrending = () => {
    const { isNearScreen, fromRef } = useNearScreen({
        distance: '0px'
    })
    //const [show, setShow] = useState(false)
    
    /*
    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
        observer.observe(elementRef.current)
        return () => observer.disconnect()
    })
    */

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner />}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>
}

export default LazyTrending