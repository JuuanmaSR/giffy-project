import { Link } from "wouter"
import './pageNotFound.css'
const PageNotFound = () => {
    return <>
        <div id="main-error-page">
            <div className="fof">
                <h1> Error 404 </h1>
            </div>
        </div>
        <Link to="/" >Home</Link>
    </>
}

export default PageNotFound