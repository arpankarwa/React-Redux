import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/CombiningReducers";
//need to change 3rd line


export const store = createStore(reducers, {}, applyMiddleware(thunk))