export const IncrementByTwo = () =>{
    return{
        type:"INC2",
    }
}

export const DecrementByTwo = () =>{
    return {
        type:"DEC2",
    }
}

export const Increment = () => {
    return {
        type: "INC",
    }
}

export const Decrement = () => {
    return {
        type: "DEC",
    }
}

export const fetchProducts = () => {
    return async (dispatch, getState) => {// call by redux thunk
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10`);
        const data = await res.json();
        dispatch(setProduct(data));
    }
}

export const setProduct = (product = null) => {
    return {
        type: "SET_PRODUCT",
        payload: product,
    }
}