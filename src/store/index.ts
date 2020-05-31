import { combineReducers, createStore } from "redux";
//promise middleware?
import { composeWithDevTools } from 'redux-devtools-extension'

import { default as todo } from "./todo/reducer";


const rootReducer = combineReducers({
	todo,
});

export const store = createStore(rootReducer, composeWithDevTools());