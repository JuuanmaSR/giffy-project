import React, { useReducer } from "react";
import { useLocation } from 'wouter'
import './searchForm.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']
const INITIAL_STATE = {
    keyword: '',
    rating: 'g',
    language: 'en'
}
const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword',
    UPDATE_RATING: 'update_rating',
    UPDATE_LANGUAGE: 'update_language',
    RESET_STATE: 'reset_state',
}
const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
            }
        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }
        case ACTIONS.UPDATE_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case ACTIONS.RESET_STATE:
            return INITIAL_STATE
        default:
            return state
    }
}

const SearchForm = ({ initialKeyword = '', initialRating = 'g', initialLanguage = 'en' }) => {
    const [_, pushLocation] = useLocation()

    // Reducer ....
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        language: initialLanguage,
    })

    const { keyword, rating, language } = state

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${(keyword)}/${rating}/${language}`)
    }
    const handleChange = evt => {
        dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value })
    }

    const handleChangeRating = evt => {
        dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value })
    }

    const handleChangeLanguage = evt => {
        dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: evt.target.value })
    }

    const handleStateReset = () => {
        dispatch({type: ACTIONS.RESET_STATE})
    }

    return <>
        <form onSubmit={handleSubmit} className='searchForm'>
            <input placeholder='Search gifs here...' type='text' value={keyword}
                onChange={handleChange} />
            <select value={rating} onChange={handleChangeRating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <select className="languages-select" value={language} onChange={handleChangeLanguage}>
                <option disabled>Select Language</option>
                <option value="ar">Arabic - العربية</option>
                <option value="bn">Bengali - বাংলা</option>
                <option value="zh-CN">Chinese (Simplified) - 中文（简体）</option>
                <option value="zh-TW">Chinese (Traditional) - 中文（繁體）</option>
                <option value="cs">Czech - čeština</option>
                <option value="da">Danish - dansk</option>
                <option value="nl">Dutch - Nederlands</option>
                <option value="en">English</option>
                <option value="fil">Filipino</option>
                <option value="fi">Finnish - suomi</option>
                <option value="fr">French - français</option>
                <option value="de">German - Deutsch</option>
                <option value="he">Hebrew - עברית</option>
                <option value="hi">Hindi - हिन्दी</option>
                <option value="hu">Hungarian - magyar</option>
                <option value="id">Indonesian - Indonesia</option>
                <option value="it">Italian - italiano</option>
                <option value="ja">Japanese - 日本語</option>
                <option value="ko">Korean - 한국어</option>
                <option value="ms">Malay - Bahasa Melayu</option>
                <option value="no">Norwegian - norsk</option>
                <option value="pl">Polish - polski</option>
                <option value="pt">Portuguese - português</option>
                <option value="ro">Romanian - română</option>
                <option value="ru">Russian - русский</option>
                <option value="es">Spanish - español</option>
                <option value="sv">Swedish - svenska</option>
                <option value="th">Thai - ไทย</option>
                <option value="tr">Turkish - Türkçe</option>
                <option value="uk">Ukrainian - українська</option>
                <option value="vi">Vietnamese - Tiếng Việt</option>
            </select>
        </form>
        <button onClick={handleStateReset}>Reset</button>
    </>
}



export default React.memo(SearchForm)