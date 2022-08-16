import { Link } from "wouter"
import './Category.css'
const Category = ({ name, options = [] }) => {
    return (
        <section className="app-list-category">
            <h1>{name}</h1>
            <ul className="app-list-trending-gifs">
                {options.map((singleOptions) => {
                    return <li key={singleOptions} >
                        <Link to={`/search/${singleOptions}`} >{singleOptions}</Link>
                    </li>
                })}
            </ul>
        </section>
    )
}

export default Category