import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const getRecipe = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_RECIPE_PENDING" });
        const res = await axios.get(base_url + "/recipes");
        dispatch({ type: "GET_RECIPE_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RECIPE_ERROR" });
    }
};

export const postRecipe = (data, navigate, token) => async (dispatch) => {
    try {
        dispatch({ type: "POST_RECIPE_PENDING" });
        const res = await axios.post(base_url + "/recipes", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        if (res.data.code)
            dispatch({ type: "POST_RECIPE_SUCCESS", payload: res.data });
        navigate("/home");
    } catch (err) {
        dispatch({
            type: "POST_RECIPE_ERROR",
            payload: err?.response?.data?.message ?? "post recipe error",
        });
    }
};

export const deleteRecipe = (id, token) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_RECIPE_PENDING" });

        if (window.confirm("Are you sure you want to delete this recipe?")) {
            const res = await axios.delete(`${base_url}/recipes/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: res.data.data });
            window.location.reload(true);
        }
    } catch (err) {
        console.log(err);
        dispatch({ type: "DELETE_RECIPE_ERROR" });
    }
};

export const getRecipeDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: "GET_RECIPE_DETAIL_PENDING" });

        const res = await axios.get(`${base_url}/recipes/${id}`);

        dispatch({ type: "GET_RECIPE_DETAIL_SUCCESS", payload: res.data.data });
        window.scrollTo(0, 0);
    } catch (err) {
        dispatch({ type: "GET_RECIPE_DETAIL_ERROR" });
    }
};

export const searchRecipe = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: "GET_RECIPE_PENDING" });
        const res = await axios.get(`${base_url}?q=${searchQuery}`);
        dispatch({ type: "GET_RECIPE_SUCCESS", payload: res.data.data });
    } catch (err) {
        dispatch({ type: "GET_RECIPE_ERROR" });
    }
};

export const updateRecipe = (id, data, navigate, token) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_RECIPE_PENDING" });

        const res = await axios.put(base_url + "/recipes/" + id, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        dispatch({ type: "UPDATE_RECIPE_SUCCESS", payload: res.data });
        navigate("/home");
        window.scrollTo(0, 0);
    } catch (err) {
        dispatch({
            type: "UPDATE_RECIPE_ERROR",
            payload: err?.response?.data?.message ?? "update recipe error",
        });
    }
};
