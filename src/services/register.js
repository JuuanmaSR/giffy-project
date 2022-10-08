const ENDPOINT = 'http://localhost:8000'

const register = ({ username, password }) => {
    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(res => {
        if (!res.ok) {
            throw new Error('Response is NOT ok')
        }
        return res.json()
    }).then(res => {
        const { savedUser, error } = res
        error ? console.log(error) : console.log(savedUser)        
    })
}


export default register