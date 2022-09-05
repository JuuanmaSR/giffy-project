import React, { useReducer } from "react";
import { useLocation } from 'wouter'
import useForm from "./hook";
import './searchForm.css'

const RATINGS = ['g', 'pg', 'pg-13', 'r']



const SearchForm = ({ initialKeyword = '', initialRating = 'g', initialLanguage = 'en' }) => {
    const [_, pushLocation] = useLocation()

    const {
        keyword,
        rating,
        language,
        updateKeyword,
        updateRating,
        updateLanguage,
        reset,
    } = useForm({ initialKeyword, initialRating, initialLanguage })


    const onSubmit = ({ keyword }) => {
        if (keyword !== '') {
            pushLocation(`/search/${(keyword)}/${rating}/${language}`)
        }
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({keyword})
    }
    const handleChangeKeyword = evt => {
        updateKeyword({ keyword: evt.target.value })
    }

    const handleChangeRating = evt => {
        updateRating({ rating: evt.target.value })
    }

    const handleChangeLanguage = evt => {
        updateLanguage({ language: evt.target.value })
    }

    const handleStateReset = () => {
        reset()
    }

    return <>
        <form onSubmit={handleSubmit} className='searchForm'>
            <input placeholder='Search gifs here...' type='text' value={keyword}
                onChange={handleChangeKeyword} />
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
        <div className="form-buttons">
            <button onClick={handleSubmit}>Buscar</button>
            <button onClick={handleStateReset}>Reset</button>
        </div>

    </>
}



export default React.memo(SearchForm)