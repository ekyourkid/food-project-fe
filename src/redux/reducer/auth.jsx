const initialState = {
    data: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    errorMessage: null,
};
const authReducers = (state = initialState, action) => {
    if (action.type === "POST_AUTH_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
            errorMessage: null,
        };
    } else if (action.type === "POST_AUTH_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isError: false,
            isSuccess: true,
            isLoading: false,
            errorMessage: null,
        };
    } else if (action.type === "POST_AUTH_ERROR") {
        return {
            ...state,
            data: null,
            isError: true,
            isSuccess: false,
            isLoading: false,
            errorMessage: action.payload,
        };
    } else if (action.type === "AUTH_LOGOUT") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: false,
            errorMessage: null,
        };
    } else {
        return state;
    }
};

export default authReducers;
