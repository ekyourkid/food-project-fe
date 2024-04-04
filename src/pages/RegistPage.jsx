// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./regist.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authRegist } from "../redux/action/auth";

export default function RegistPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const authdata = useSelector((state) => state.auth_regist);
    const [inputData, setInputData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    const postData = (event) => {
        event.preventDefault();
        let data = inputData;
        console.log("inputData");
        dispatch(authRegist(data, navigate));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }),
        [];

    console.log(inputData);
    return (
        <>
            <main className="regist-main">
                <div className="cover">
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
                                Lets Get Started !
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
                                Create new account to access all features
                            </p>
                        </span>
                    </div>
                    <hr width="427px" style={{ marginLeft: 80 }} />
                    <form
                        onSubmit={postData}
                        style={{
                            marginTop: 15,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div className="mb-3">
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "#696f79",
                                }}
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Name
                            </h1>
                            <input
                                id="username"
                                name="username"
                                required
                                onChange={onChange}
                                type="text"
                                className="form-control"
                                placeholder="Name"
                            />
                        </div>
                        <div className="mb-3">
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "#696f79",
                                }}
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Email
                            </h1>
                            <input
                                id="email"
                                name="email"
                                required
                                onChange={onChange}
                                type="email"
                                className="form-control"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="mb-3">
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "#696f79",
                                }}
                                htmlFor="exampleFormControlInput1"
                                className="form-label"
                            >
                                Password
                            </h1>
                            <input
                                id="password"
                                name="password"
                                required
                                onChange={onChange}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                            />
                        </div>
                        {authdata.isLoading ? (
                            <div className="alert alert-primary my-3">
                                Loading ...
                            </div>
                        ) : null}
                        {authdata.isError ? (
                            <div
                                className="alert alert-danger my-3 py-2"
                                style={{ fontSize: "14px" }}
                            >
                                {authdata.ErrorMessage ?? " - "}
                            </div>
                        ) : null}
                        <div
                            className="form-check"
                            style={{ marginLeft: -170 }}
                        >
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
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                            }}
                        >
                            <button type="submit" className="button-regist">
                                Register Account
                            </button>
                        </div>
                    </form>
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
                            Already have account?
                            <Link
                                style={{ textDecoration: "none" }}
                                className="button-login"
                                to="/login"
                            >
                                Log in Here
                            </Link>
                        </h1>
                    </div>
                </div>
                {/* <div className="popup" id="modal">
                    <div className="popup__content">
                        <h1>Account has been set up</h1>
                        <p>Account activated successfully, please login</p>
                        <Link to="/login" className="btn-popUp">
                            Ok
                        </Link>
                        <a
                            style={{
                                width: "fit-content",
                                background: "transparent",
                            }}
                            href="#"
                            className="closePopUp"
                        >
                            ×
                        </a>
                    </div>
                </div> */}
            </main>
        </>
    );
}
