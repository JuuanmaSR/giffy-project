const ENDPOINT = 'http://localhost:8000/api'


const deleteFavs = ({id ,jwt}) => {
    return fetch(`${ENDPOINT}/delete-favs`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authentication': jwt
        },
        body: JSON.stringify({ id})
    }).then(res => {
        if (!res.ok) {
            throw new Error('Response is NOT ok')
        }
        return res.json()
    }).then(res => {
        const {favorites} = res
        return favorites
    })
    
}

export default deleteFavs