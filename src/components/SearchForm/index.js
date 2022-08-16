import React, { useState } from "react";

const SearchForm = ({onSubmit}) => {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({keyword})
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Search gifs here...' type='text' value={keyword}
                onChange={handleChange} />
        </form>
    )
}



export default React.memo(SearchForm)