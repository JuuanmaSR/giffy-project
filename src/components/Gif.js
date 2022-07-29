import '../components/Gif.css'

const Gif = ({ id, title, url }) => {
    return (
        <a href={`#${id}`} className="Gif">
            <h4>{title}</h4>
            <img key={id} src={url} alt={title} />
        </a>
    )
}

export default Gif