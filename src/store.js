import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers( {} )
const firstState = {}
const middleware = [thunk]

const drinkStore = createStore(reducer, firstState, composeWithDevTools(applyMiddleware([...middleware])))

export default drinkStore;