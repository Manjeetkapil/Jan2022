import { createStore } from 'redux';

import parentReducer from "./reducers/index"

let store = createStore(parentReducer);

store.subscribe(() => store.getState())

export default store;