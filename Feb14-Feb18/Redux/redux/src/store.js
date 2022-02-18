import { createStore, applyMiddleware } from "redux"
import ReduxThunk from "redux-thunk"

import parentReducer from "./reducers/index"

let store = createStore(parentReducer,applyMiddleware(ReduxThunk));

store.subscribe(() => store.getState())

export default store;