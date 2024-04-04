const initialState = {
    data: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    errorMessage: null,
};

const usersUpdateReducers = (state = initialState, action) => {
    if (action.type === "UPDATE_USERS_PENDING") {
        return {
            ...state,
            data: null,
            isError: false,
            isSuccess: false,
            isLoading: true,
            errorMessage: null,
        };
    } else if (action.type === "UPDATE_USERS_SUCCESS") {
        return {
            ...state,
            data: action.payload,
            isError: false,
            isSuccess: true,
            isLoading: false,
            errorMessage: null,
        };
    } else if (action.type === "UPDATE_USERS_ERROR") {
        return {
            ...state,
            data: null,
            isError: true,
            isSuccess: false,
            isLoading: false,
            errorMessage: action.payload,
        };
    } else if (action.type === "UPDATE_USERS_RESET") {
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

export default usersUpdateReducers;
