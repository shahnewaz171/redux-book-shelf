import { combineReducers } from "redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "../reducers/bookReducers";

const combineReducer = combineReducers({
    books: bookReducer
})


export const store = createStore(combineReducer, composeWithDevTools());