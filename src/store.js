import { createStore, combineReducers } from 'redux';

const reducer = combineReducers( {} )
const firstState = {}

const drinkStore = createStore(reducer, firstState)