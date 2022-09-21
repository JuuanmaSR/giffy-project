import React, { useEffect, useState } from 'react'
import getFavs from 'services/getFavs'
const Context = React.createContext({})

export function UserContextProvider({ children }) {
    const [favs, setFavs] = useState([])
    const [jwt, setJWT] = useState(
        () => window.sessionStorage.getItem('jwt')
    )
    useEffect(() => {
        if (!jwt) setFavs([])
        getFavs({jwt}).then(favs => setFavs(favs))
    }, [jwt])
    return <Context.Provider value={{
        favs,
        jwt,
        setFavs,
        setJWT
    }}>
        {children}
    </Context.Provider>
}

export default Context