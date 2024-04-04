// eslint-disable-next-line no-unused-vars
import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authLogin } from "../redux/action/auth";
import { useSelector } from "react-redux";

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authData = useSelector((state) => state.auth);
    const [inputData, setInputData] = useState({
        email: "",
        password: "",
    });
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target?.name]: e.target.value });
    };

    const postData = (event) => {
        event.preventDefault();
        let data = inputData;
        console.log("inputData");
        dispatch(authLogin(data, navigate));
    };
    console.log(inputData);

    return (
        <main className="login-main">
            <div className="cover-main">
                <div className="header-cover">
                    <span className="span1">
                        <h1
                            style={{
                                color: "#efc81a",
                                fontWeight: 600,
                                fontSize: 30,
                            }}
                        >
                            Recipe...
                        </h1>
                    </span>
                    <span className="span2">
                        <h1
                            style={{
                                width: 280,
                                height: 39,
                                color: "#efc81a",
                                fontWeight: 600,
                                fontSize: 30,
                            }}
                        >
                            Welcome
                        </h1>
                        <p
                            style={{
                                width: 400,
                                height: 28,
                                color: "#8692a6",
                                fontWeight: 600,
                                fontSize: 18,
                                marginTop: 15,
                            }}
                        >
                            Log in into your existing account
                        </p>
                    </span>
                </div>
                <hr width="427px" style={{ marginLeft: 80 }} />
                <form
                    style={{
                        marginTop: 15,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                    onSubmit={postData}
                >
                    <div className="mb-3">
                        <h1
                            style={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#696f79",
                            }}
                            htmlFor="email"
                            className="form-label"
                        >
                            Email
                        </h1>
                        <input
                            type="email"
                            id="exampleFormControlInput1"
                            className="form-control"
                            placeholder="Enter email address"
                            onChange={onChange}
                            required
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <h1
                            style={{
                                fontWeight: 500,
                                fontSize: 16,
                                color: "#696f79",
                            }}
                            htmlFor="password"
                            className="form-label"
                        >
                            Password
                        </h1>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            onChange={onChange}
                            required
                            name="password"
                        />
                    </div>
                    {/* <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            defaultValue=""
                            id="flexCheckDefault"
                        />
                        <h1
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                        >
                            I agree to terms &amp; conditions
                        </h1>
                    </div> */}
                    <button type="submit" className="btn-login">
                        Submit
                    </button>
                </form>
                <span className="forgot-sect">
                    <h1
                        style={{
                            fontSize: 13,
                            fontWeight: 500,
                            color: "#999999",
                        }}
                    >
                        Forgot your Password?
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/forgotPassword"
                            className="forgot-button"
                        >
                            Click here
                        </Link>
                    </h1>
                </span>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "end",
                        height: 100,
                    }}
                >
                    <h1
                        style={{
                            fontWeight: 500,
                            fontSize: 13,
                            color: "#999999",
                        }}
                    >
                        Dont have an account?
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/register"
                            className="button-login"
                        >
                            Sign Up
                        </Link>
                    </h1>
                </div>
                {authData.isError ? (
                    <div className="alert alert-danger">
                        {" "}
                        Login failed :{authData.errorMessage ?? "-"}
                    </div>
                ) : null}
                {authData.isLoading ? (
                    <div className="alert alert-primary" style={{ margin: 20 }}>
                        Please Wait for loading data ...
                    </div>
                ) : null}
            </div>
        </main>
    );
}
