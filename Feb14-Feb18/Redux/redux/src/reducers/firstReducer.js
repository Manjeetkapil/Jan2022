const firstReducer = (state=0,action) =>{
    switch(action.type){
        case "INC2": return state+2;
        case "DEC2": return state-2;
        case "INC": return state+1;
        case "DEC": return state-1;
        default : return state;
    }
}

export default firstReducer;