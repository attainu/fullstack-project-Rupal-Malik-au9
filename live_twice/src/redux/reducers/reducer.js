let initialState = {
    restaurants: []
}
//action = {type: 'SET_EXPRESSION', payload: expression}
// return state, setState
const reducer = (state = initialState, action) => {
    let stateCopy = { ...state } 
    switch (action.type) {
        case 'LATEST_TRAVEL':
            stateCopy.restaurants = action.payload;
            console.log("travel"+stateCopy)
            return stateCopy;
        case 'SET_SPORTS':
            stateCopy.restaurants = action.payload;
            return stateCopy;
        case 'LATEST_RESTAURANTS':
            stateCopy.restaurants = action.payload;
            return stateCopy;
        default:
            return stateCopy;
    }
}

export default reducer;