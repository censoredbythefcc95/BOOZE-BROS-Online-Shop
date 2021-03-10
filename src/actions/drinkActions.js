import { LIST_REQUEST, LIST_SUCCESS, LIST_FAIL } from "../constants/drinkConstant";
import axios from "axios";

export const listDrinks = () => async (dispatch) => {
    try {
        dispatch({ type: LIST_REQUEST })
        const { data } = await axios.get('/drinks')
        dispatch({ type: LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: LIST_FAIL, payload: error.response && error.response.data.message
        ? error.response.data.message : error.message })
    }
}