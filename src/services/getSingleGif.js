import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
    const { data } = apiResponse
    const { images, title, id } = data
    const { url } = images.downsized_medium
    return { id, title, url }
}

const getSingleGif = ({ id }) => {
    return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}


export default getSingleGif