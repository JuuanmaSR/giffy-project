const ENDPOINT = 'http://localhost:8000'

const addFav = ({ id, jwt }) => {
    return fetch(`${ENDPOINT}/favs`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, jwt })
    }).then(res => {
        if (!res.ok) {
            throw new Error('Response is NOT ok')
        }
        return res.json()
    }).then(res => {
        const { favorites } = res
        return favorites
    })
}


export default addFav