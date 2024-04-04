import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjNTZjYWMzLWI4ZTAtNGQ4Mi1iYjUwLTA5OTMzMDYwNThiMiIsInVzZXJuYW1lIjoidGVzdDYiLCJhZGRyZXNzIjoiamFnYWthcnNhIiwiaWF0IjoxNzExNzQyNDkwLCJleHAiOjE3MTE4Mjg4OTB9.zDIEwy1cmG4ejicqdrQYkI1wa34WfgN-Jx5ijH6fxZA";

export const getRecipe = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_RECIPE_PENDING" });
        const res = await axios.get(base_url + "/recipes");
        dispatch({ type: "GET_RECIPE_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RECIPE_ERROR" });
    }
};

export const postRecipe = (data, navigate) => async (dispatch, getState) => {
    try {
        dispatch({ type: "POST_RECIPE_PENDING" });
        const res = await axios.post(base_url + "/recipes", data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("res");
        console.log(res);
        if (res.data.code)
            dispatch({ type: "POST_RECIPE_SUCCESS", payload: res.data });
        navigate("/home");
    } catch (err) {
        console.log("err");
        console.log(err);
        dispatch({
            type: "POST_RECIPE_ERROR",
            payload: err?.response?.data?.message ?? "post recipe error",
        });
    }
};

export const deleteRecipe = (id) => async (dispatch, getState) => {
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
        console.log(err?.message ? err.message : err);
        dispatch({ type: "DELETE_RECIPE_ERROR" });
    }
};

export const getRecipeDetail = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_RECIPE_DETAIL_PENDING" });

        const res = await axios.get(`${base_url}/recipes/${id}`);
        console.log("res");
        console.log(res);

        dispatch({ type: "GET_RECIPE_DETAIL_SUCCESS", payload: res.data.data });
        window.scrollTo(0, 0);
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RECIPE_DETAIL_ERROR" });
    }
};

export const searchRecipe = (searchQuery) => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_RECIPE_PENDING" });
        const res = await axios.get(`${base_url}?q=${searchQuery}`);
        dispatch({ type: "GET_RECIPE_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_RECIPE_ERROR" });
    }
};

export const updateRecipe =
    (id, data, navigate) => async (dispatch, getState) => {
        try {
            dispatch({ type: "UPDATE_RECIPE_PENDING" });

            const res = await axios.put(base_url + "/recipes/" + id, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("res");
            console.log(res);
            dispatch({ type: "UPDATE_RECIPE_SUCCESS", payload: res.data });
            navigate("/home");
            window.scrollTo(0, 0);
        } catch (err) {
            console.log("err");
            console.log(err);
            console.log(err?.message ? err.message : err);
            dispatch({
                type: "UPDATE_RECIPE_ERROR",
                payload: err?.response?.data?.message ?? "update recipe error",
            });
        }
    };
