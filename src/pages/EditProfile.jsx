// eslint-disable-next-line no-unused-vars
import React from "react";
import "./editProfile.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { updateUsers } from "../redux/action/users";

export default function EditProfile() {
    const authdata = useSelector((state) => state.auth.data);
    // const dispatch = useDispatch();
    // const usersUpdate = useSelector((state) => state.users_update);
    // const navigate = useNavigate();
    // const [inputData, setInputData] = useState({
    //     username: "",
    //     email: "",
    // });

    // useEffect(() => {
    //     dispatch(authdata);
    // dispatch({ type: "UPDATE_RECIPE_RESET" });
    // }, []);

    // const updateData = (event) => {
    //     event.preventDefault();
    //     let bodyData = new FormData();
    //     bodyData.append("username", inputData.username);
    //     bodyData.append("email", inputData.email);

    //     dispatch(updateUsers(authdata, bodyData, navigate));
    // };

    // const onChange = (e) => {
    //     setInputData({ ...inputData, [e.target.name]: e.target.value });
    // };
    // const handdleButtonClick = () => {
    //     window.scrollTo(0, 0);
    // };

    // console.log(inputData);

    return (
        <>
            <Navbar />
            <main className="main-editProfile">
                <section className="section-edit-profile">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {authdata.data ? (
                            <img
                                src={authdata?.data?.photo_profile}
                                width="280px"
                                height="272px"
                                alt="user-edit"
                                style={{ borderRadius: 250 }}
                            />
                        ) : null}
                        <input type="file" id="photo_profile" hidden="" />
                        <label
                            className="label-edit-profile"
                            htmlFor="edit-profile"
                        >
                            Change Profile picture
                        </label>
                    </div>
                    <form
                        // onSubmit={updateData}
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
                                // onChange={onChange}
                                id="username"
                                name="username"
                                type="text"
                                className="form-control"
                                placeholder={authdata?.data?.username}
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
                                // onChange={onChange}
                                id="email"
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder={authdata?.data?.email}
                            />
                        </div>
                        <button
                            // onClick={handdleButtonClick}
                            type="submit"
                            className="btn-update-profile"
                        >
                            Update Profile
                        </button>
                        <span className="forgot-sect-editProfile">
                            <h1
                                style={{
                                    fontSize: 13,
                                    fontWeight: 500,
                                    color: "#999999",
                                }}
                            >
                                Change Password?
                                <Link
                                    className="forgot-button"
                                    to="/changePassword"
                                >
                                    Click here
                                </Link>
                            </h1>
                        </span>
                    </form>
                </section>
                {/* POP UP */}
                {/* <div className="popup" id="modal">
                    <div className="popup__content">
                        <h1>You want to logout?</h1>
                        <a href="../auth-page/login.html" className="btn-popUp">
                            Ok
                        </a>
                        <a
                            style={{
                                width: 426,
                                height: 64,
                                background: "#e7e7e7",
                                color: "#ffffff",
                                marginTop: 20,
                            }}
                            href="#"
                            className="closePopUp"
                        >
                            cancel;
                        </a>
                    </div>
                </div> */}
                {/* {usersUpdate.isLoading ? (
                    <div className="alert alert-primary">Loading ...</div>
                ) : null}
                {usersUpdate.isError ? (
                    <div className="alert alert-danger">
                        Update user failed: {usersUpdate.errorMessage ?? " - "}
                    </div>
                ) : null} */}
            </main>
        </>
    );
}
