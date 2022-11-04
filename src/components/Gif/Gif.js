import React from 'react'
import Fav from 'components/Fav'
import { GifContainer, GifButtons, GifLink, GifImage,GifTitle } from './styles'

const Gif = ({ id, title, url }) => {
    return (
        <GifContainer>
            <GifButtons>
                <Fav id={id} />
            </GifButtons>
            <GifLink to={`/gif/${id}`}>
                <GifImage loading='lazy' key={id} src={url} alt={title} />
                <GifTitle>{title}</GifTitle>
            </GifLink>
        </GifContainer>

    )
}

export default React.memo(Gif)