import axios from "axios";
import { ADD_ITEM } from "../constants/cardConstant";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/drinks/${id}`)

    dispatch({
        type: ADD_ITEM,
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}