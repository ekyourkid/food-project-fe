const initiaState = {
    data: null,
    isSuccess: false,
    isError: false,
    isLoading: false,
};
const usersRecipes = (state = initiaState, action) => {
    if (action.type === "GET_USERS_PENDING") {
        return {
            ...state,
            isLoading: true,
            data: null,
        };
    } else if (action.type === "GET_USERS_SUCCESS") {
        return {
            ...state,
            isLoading: false,
            isSuccess: true,
            data: action.payload,
        };
    } else if (action.type === "GET_USERS_ERROR") {
        return {
            ...state,
            isLoading: false,
            isSuccess: false,
            isError: true,
            data: null,
        };
    } else {
        return state;
    }
};

export default usersRecipes;
