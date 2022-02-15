import { combineReducers } from "redux";

import firstReducer from "./firstReducer";

const parentReducer = combineReducers({
    firstReducer
})

export default parentReducer;