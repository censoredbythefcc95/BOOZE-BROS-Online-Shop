//actions from constants folder.
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAIL,
        DETAILS_REQUEST, DETAILS_SUCCESS, DETAILS_FAIL } from "../constants/drinkConstant";


export const drinkReducer = (state = { drinks: [] }, action) => {
    //switch statement for cases of list requests
    switch (action.type) {
        case LIST_REQUEST:
            return { loading: true, drinks: [] } // if loading, run loading: true
        case LIST_SUCCESS:
            return { loading: false, drinks: action.payload } // if done loading, do not load.
        case LIST_FAIL:
            return { loading: false, error: action.payload } // error if reducer fails to load
            default:
                return state
    }
}

export const drinkDetailsReducer = (state = { drink: { reviews: [] } }, action) => {
    //switch statement for cases of list requests
    switch (action.type) {
        case DETAILS_REQUEST:
            return { loading: true, ...state } // if loading, run loading: true
        case DETAILS_SUCCESS:
            return { loading: false, drink: action.payload } // if done loading, do not load.
        case DETAILS_FAIL:
            return { loading: false, error: action.payload } // error if reducer fails to load
            default:
                return state
    }
}