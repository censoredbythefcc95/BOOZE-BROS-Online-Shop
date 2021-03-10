export const drinkReducer = (state = { drinks: [] }, action) => {
    //switch statement for cases of list requests
    switch (action.type) {
        case 'list_request':
            return { loading: true, drinks: [] } // if loading, run loading: true
        case 'list_success':
            return { loading: false, drinks: action.payload } // if done loading, do not load.
        case 'list_fail':
            return { loading: false, error: action.payload } // error if reducer fails to load
            default:
                return state
    }
}