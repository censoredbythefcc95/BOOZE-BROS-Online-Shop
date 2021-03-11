import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { drinkReducer, drinkDetailsReducer } from "./reducers/drinkReducers";
import { cartReducer } from "./reducers/cartReducers"
import thunk from 'redux-thunk';

const reducer = combineReducers({
         drinkList: drinkReducer,
         drinkDetails: drinkDetailsReducer,
         cart: cartReducer,
         })

const cartItemsStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = { cart: { cartItems: cartItemsStorage }, }
const middleware = [thunk]

const drinkStore = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default drinkStore;