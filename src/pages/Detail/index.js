import Gif from "../../components/Gif/Gif"
import useGifs from "../../hooks/useGifs"

const Detail = ({ params }) => {
    const  {gifs}  = useGifs()
    const gif = gifs.find(singleGif => singleGif.id === params.id)
    return <Gif {...gif} />
}


export default Detail