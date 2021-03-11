import { ADD_ITEM, DELETE_ITEM } from "../constants/cardConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type) {
        case ADD_ITEM:
            const item = action.payload

            const existItems = state.cartItems.find((x) => x.drink === item.drink)

            if(existItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.drink === existItems.drink ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
            case DELETE_ITEM:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(x => x.drink !== action.payload),
                }
            default: 
            return state
          }
        }
