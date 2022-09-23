import React from 'react'
import { Link } from 'wouter'
import './Gif.css'
import Fav from 'components/Fav'

const Gif = ({ id, title, url }) => {
    return (
        <div className='gif'>
            <div className='gif-buttons'>
                <Fav id={id} />
            </div>
            <Link to={`/gif/${id}`} >
                    <img loading='lazy' key={id} src={url} alt={title} />
                    <h4 className='gif-title'>{title}</h4>
            </Link>
        </div>

    )
}

export default React.memo(Gif)