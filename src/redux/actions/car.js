const actionTypes = {
    FETCH_CAR_SUCCESS: 'FETCH_CAR_SUCCESS',
    FETCH_CAR_FAILURE: 'FETCH_CAR_FAILURE',
}

const initialState = {
    car : [],
    loading: false,
    error: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CAR_SUCCESS:
            return {
                ...state,
                car: action.payload,
                loading: false,
                error: null,
            }
        case actionTypes.FETCH_CAR_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;