import {API_KEY, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data = [] } = apiResponse
    if(Array.isArray(data)) {
        const gifs = data.map(image => {
            const {images, title, id } = image
            const {url} = images.downsized_medium
            return {id, title, url}
        })
        return gifs
    }
    return []
}


const getGifs = ({limit = 5 , keyword = 'error', rating = 'g', page = 0, language = 'en'}) => {
    let apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=${language}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs);
}


export default getGifs