import Spinner from "components/Spinner"
import useSingleGif from "hooks/useSingleGifs"
import { Redirect } from "wouter"
import Gif from "../../components/Gif/Gif"
import { Helmet } from "react-helmet"

const Detail = ({ params }) => {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    const title = gif ? gif.title : ''

    const description = gif ? `Detail of ${title}` : ''

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }
    if (isError) return <Redirect to='/invalid-id' />
    if (!gif) return null

    return <>
        <Helmet>
            <title>
                {title} || Giffy
            </title>
            <meta name="description" content={description}>
            </meta>
        </Helmet>
        <h3 className="app-title">{title}</h3>
        <Gif {...gif} />
    </>
}


export default Detail