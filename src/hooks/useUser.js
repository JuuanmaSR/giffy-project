import { useContext, useCallback, useState } from "react"
import Context from "context/UserContext"
import loginService from "services/login"
import registerService from "services/register"
import addFavService from 'services/addFavs'
import deleteFavService from "services/deleteFavs"

const useUser = () => {
    const { favs, jwt, setFavs, setJWT } = useContext(Context)
    const [loginState, setLoginState] = useState({ loading: false, error: false })
    const [registerState, setRegisterState] = useState({ loading: false, error: false, isRegistered: false })

    const login = useCallback(({ username, password }) => {
        setLoginState({ loading: true, error: false })
        loginService({ username, password })
            .then(jwt => {
                window.sessionStorage.setItem('jwt', jwt)
                setLoginState({ loading: false, error: false })
                setJWT(jwt)
            })
            .catch(err => {
                window.sessionStorage.removeItem('jwt')
                setLoginState({ loading: false, error: err })
                console.error(err)
            })
    }, [setJWT])

    const register = ({ username, password }) => {
        setRegisterState({ loading: true, error: false, isRegistered: false})
        registerService({ username, password })
            .then(() => {
                setRegisterState({ loading: false, error: false, isRegistered: true })
            }).catch(err => {
                setRegisterState({ loading: false, error: true, isRegistered: false })
                console.error(err)
            })
    }
    const addFav = useCallback(({ id }) => {
        addFavService({ id, jwt })
            .then(favs => setFavs(favs))
            .catch(error => {
                console.error(error)
            })
    }, [jwt, setFavs])

    const deleteFav = useCallback(({ id }) => {
        deleteFavService({ id, jwt })
            .then(favs => setFavs(favs))
            .catch(error => {
                console.error(error)
            })
    }, [jwt, setFavs])

    const logout = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: loginState.loading,
        hasLoginError: loginState.error,
        isRegistered: registerState.isRegistered,
        isRegisterLoading: registerState.loading,
        hasRegisterError: registerState.error,
        login,
        register,
        logout,
        addFav,
        deleteFav,
        favs,
    }
}

export default useUser