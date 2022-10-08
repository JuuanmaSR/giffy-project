const ENDPOINT = 'http://localhost:8000/api'

const getFavs = ({ jwt }) => {
    return fetch(`${ENDPOINT}/favs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': jwt
        }
    }).then(res => {
        if (!res.ok) {
            throw new Error('Response is NOT ok.')
        }
        return res.json()
    }).then(res => {
        const {favorites, error} = res
        if (error) {
            throw new Error('User is not logged in.')
        }
        return favorites 
    })
}


export default getFavs