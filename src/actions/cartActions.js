import axios from "axios";
import { ADD_ITEM, DELETE_ITEM } from "../constants/cardConstant";

export const addToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`/drinks/${id}`)

    dispatch({
        type: ADD_ITEM,
        payload: {
            drink: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            quantity
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: DELETE_ITEM,
        payload: id
    })

    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
