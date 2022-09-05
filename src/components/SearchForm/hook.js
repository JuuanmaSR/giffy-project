import { useReducer } from 'react'

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

const useForm = ({ initialKeyword, initialRating, initialLanguage }) => {

    // Reducer ....
    const [state, dispatch] = useReducer(reducer, {
        keyword: decodeURIComponent(initialKeyword),
        rating: initialRating,
        language: initialLanguage,
    })
    const { keyword, rating, language } = state
    return {
        keyword,
        rating,
        language,
        updateKeyword: ({keyword}) => dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
        updateRating: ({rating}) => dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating }),
        updateLanguage: ({language}) => dispatch({ type: ACTIONS.UPDATE_LANGUAGE, payload: language }),
        reset: () => dispatch({ type: ACTIONS.RESET_STATE }),

    }
}


export default useForm