import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

const Gif = ({ id, title, url }) => {
    return (
        <div className='Gif'>
            <Link to={`/gif/${id}`} >
                <img loading='lazy' key={id} src={url} alt={title} />
            </Link>
        </div>

    )
}

export default React.memo(Gif)