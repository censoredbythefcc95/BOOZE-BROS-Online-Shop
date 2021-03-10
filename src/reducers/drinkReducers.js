//actions from constants folder.
import { LIST_REQUEST, LIST_SUCCESS, LIST_FAIL } from "../constants/drinkConstant";


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