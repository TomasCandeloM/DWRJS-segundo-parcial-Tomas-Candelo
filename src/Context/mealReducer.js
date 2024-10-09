export const actions = {
    SET_MEALS: 'SET_MEALS',
    SET_MEALDETAIL: 'SET_MEALDETAIL',
    SET_LOADING: 'SET_LOADING',
    SET_ERROR: 'SET_ERROR'
};
export const initialState = {
    meals: [],
    mealDetail: null,
    loading: false,
    error: null
};

export const mealReducer = (state, action) => {
    switch (action.type){
        case actions.SET_MEALS:
            return { ...state, meals: action.payload };
        case actions.SET_MEALDETAIL:
            return { ...state, mealDetail: action.payload};
            case actions.SET_LOADING:
                return { ...state, loading: action.payload };
            case actions.SET_ERROR:
                return { ...state, error: action.payload };
            default:
                return state;
    }
}