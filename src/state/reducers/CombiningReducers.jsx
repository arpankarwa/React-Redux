import AmountReducer from "./AmountReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    amount: AmountReducer
})

export default reducers