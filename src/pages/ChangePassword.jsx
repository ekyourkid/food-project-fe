// eslint-disable-next-line no-unused-vars
import React from "react";
import "./changePassword.css";
import { Link } from "react-router-dom";

export default function ChangePassword() {
    return (
        <>
            <main className="main-changePass">
                <section className="section-changePass">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: 130,
                        }}
                    >
                        <h1
                            style={{
                                fontWeight: 700,
                                fontSize: 30,
                                color: "#efc81a",
                            }}
                        >
                            Change Your Password Here
                        </h1>
                    </div>
                    <div
                        style={{
                            marginTop: 15,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
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
                                Old Password
                            </h1>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="*************"
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
                                New Password
                            </h1>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleFormControlInput1"
                                placeholder="*************"
                            />
                        </div>
                        <a href="#modal-pass" className="btn-update-profile">
                            Change Password
                        </a>
                        <span className="forgot-section">
                            <h1
                                style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "#999999",
                                }}
                            >
                                Back to edit profile?
                                <Link
                                    className="forgot-button"
                                    to="/editProfile"
                                >
                                    Click here
                                </Link>
                            </h1>
                        </span>
                    </div>
                </section>
                {/* POP UP CHANGE PASSWORD */}
                <div className="popup-pass" id="modal-pass">
                    <div className="popup-pass-content">
                        <h1>Password has been updated</h1>
                        <p>please login again</p>
                        <Link to="/login" className="button-popup-pass">
                            Ok
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
