import { useContext, useCallback, useState } from "react"
import Context from "context/UserContext"
import loginService from "services/login"
import addFavService from 'services/addFavs'

const useUser = () => {
    const { favs, jwt, setFavs, setJWT } = useContext(Context)
    const [state, setState] = useState({ loading: false, error: false })

    const login = useCallback(({ username, password }) => {
        loginService({ username, password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt)
                setState({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                setState({ loading: false, error: true })
                console.error(err)
            })
    }, [setJWT])

    const addFav = useCallback(({ id }) => {
        addFavService({ id, jwt })
            .then(favs => setFavs(favs))
            .catch(error => {
                console.error(error)
            })
    }, [jwt, setFavs])
    
    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoginError: state.error,
        login,
        logout,
        addFav,
        favs,
    }
}

export default useUser