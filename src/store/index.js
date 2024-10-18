import {applyMiddleware, combineReducers, createStore} from "redux";
import {movies} from "./reducers/movies";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    movies
}), composeWithDevTools(applyMiddleware(thunk)))
