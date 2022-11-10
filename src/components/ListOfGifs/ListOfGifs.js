import Gif from "../Gif/Gif"
import { GifContainer } from "./styles"


const ListOfGifs = ({ gifs }) => {

    return <GifContainer className="ListOfGifs">
        {
            gifs.map(({ id, title, url }) => {
                return <Gif
                    id={id}
                    key={id}
                    title={title}
                    url={url}
                />
            })
        }
    </GifContainer>


}

export default ListOfGifs