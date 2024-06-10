import axios from "axios";

const base_url = import.meta.env.VITE_BASE_URL;

export const authLogin = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "POST_AUTH_PENDING" });
        const res = await axios.post(base_url + "/users/login", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        dispatch({ type: "POST_AUTH_SUCCESS", payload: res.data });
        navigate("/home");
    } catch (err) {
        dispatch({
            type: "POST_AUTH_ERROR",
            payload: err?.response?.data?.message ?? "login error",
        });
    }
};

export const authLogout = () => async (dispatch) => {
    dispatch({ type: "AUTH_LOGOUT" });
};

export const authRegist = (data, navigate) => async (dispatch) => {
    try {
        dispatch({ type: "REGIST_AUTH_PENDING" });
        const res = await axios.post(base_url + "/users/regist", data, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        dispatch({ type: "REGIST_AUTH_SUCCESS", payload: res.data });
        navigate("/login");
    } catch (err) {
        dispatch({
            type: "REGIST_AUTH_ERROR",
            payload: err?.response?.data?.message ?? "login error",
        });
    }
};
