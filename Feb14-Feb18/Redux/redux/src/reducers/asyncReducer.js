const firstState = [];

const asyncReducer = (state = firstState, action) => {
    switch (action.type) {
        case "SET_PRODUCT": 
        return [...action.payload];
        default: return state;
    }
}

export default asyncReducer;