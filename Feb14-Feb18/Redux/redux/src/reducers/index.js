import { combineReducers } from "redux";

import firstReducer from "./firstReducer";
import asyncReducer from "./asyncReducer";

const parentReducer = combineReducers({
    firstReducer,
    asyncReducer
})

export default parentReducer;