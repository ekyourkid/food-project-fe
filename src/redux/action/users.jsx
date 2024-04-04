import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;
const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZjNTZjYWMzLWI4ZTAtNGQ4Mi1iYjUwLTA5OTMzMDYwNThiMiIsInVzZXJuYW1lIjoidGVzdDYiLCJhZGRyZXNzIjoiamFnYWthcnNhIiwiaWF0IjoxNzExNzQyNDkwLCJleHAiOjE3MTE4Mjg4OTB9.zDIEwy1cmG4ejicqdrQYkI1wa34WfgN-Jx5ijH6fxZA";

export const getUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: "GET_USERS_PENDING" });
        const res = await axios.get(base_url + "/users");
        dispatch({ type: "GET_USERS_SUCCESS", payload: res.data.data });
    } catch (err) {
        console.log(err?.message ? err.message : err);
        dispatch({ type: "GET_USERS_ERROR" });
    }
};

export const updateUsers =
    (id, data, navigate) => async (dispatch, getState) => {
        try {
            dispatch({ type: "UPDATE_USERS_PENDING" });

            const res = await axios.put(base_url + "/users/" + id, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("res");
            console.log(res);
            dispatch({ type: "UPDATE_USERS_SUCCESS", payload: res.data });
            navigate("/detailProfile");
            window.scrollTo(0, 0);
        } catch (err) {
            console.log("err");
            console.log(err);
            console.log(err?.message ? err.message : err);
            dispatch({
                type: "UPDATE_USERS_ERROR",
                payload: err?.response?.data?.message ?? "update users error",
            });
        }
    };
