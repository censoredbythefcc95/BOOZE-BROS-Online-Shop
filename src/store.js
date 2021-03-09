import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers( {} )
const firstState = {}

const drinkStore = createStore(reducer, firstState)