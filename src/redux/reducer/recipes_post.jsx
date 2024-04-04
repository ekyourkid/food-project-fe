const initialState = {
    data: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    ErrorMessage: null,
};
const recipesPostReducers = (state = initialState, action) => {
    if (action.type === "POST_RECIPE_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
            ErrorMessage: null,
        };
    } else if (action.type === "POST_RECIPE_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isSuccess: true,
            isError: false,
            isLoading: false,
            ErrorMessage: null,
        };
    } else if (action.type === "POST_RECIPE_ERROR") {
        return {
            ...state,
            data: null,
            isError: true,
            isSuccess: false,
            isLoading: false,
            ErrorMessage: action.payload,
        };
    } else if (action.type === "POST_RECIPE_RESET") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: false,
            ErrorMessage: null,
        };
    } else {
        return state;
    }
};

export default recipesPostReducers;
