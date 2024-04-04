// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const authdata = useSelector((state) => state.auth.data);

    const logout = () => {
        localStorage;
        navigate("/login");
    };

    return (
        <nav className="navbar">
            <div className="nav-left">
                {authdata.data ? (
                    <Link to="/home" className="home-nav">
                        Home
                    </Link>
                ) : (
                    <Link to="/register" className="home-nav">
                        Register
                    </Link>
                )}
                {authdata.data ? (
                    <Link
                        to="/addRecipe"
                        refresh="true"
                        className="addRecipe-nav"
                    >
                        Add Recipe
                    </Link>
                ) : (
                    <Link to="/login" refresh="true" className="addRecipe-nav">
                        Login
                    </Link>
                )}
                <Link to="/search" className="searchMenu-nav">
                    Search Menu
                </Link>
            </div>
            <div className="nav-rigth">
                <Link to="/editProfile" className="nav-photo">
                    {authdata ? (
                        <img
                            style={{
                                marginLeft: 20,
                                width: 64,
                                height: 64,
                                borderRadius: 50,
                            }}
                            src={authdata?.data?.photo_profile}
                            alt="user-photo"
                        />
                    ) : null}
                </Link>
                <span className="nav-text">
                    {authdata ? (
                        <h1
                            style={{
                                fontSize: 20,
                                fontWeight: 500,
                                color: "#000000",
                            }}
                        >
                            {authdata?.data?.username}
                        </h1>
                    ) : null}
                    {authdata ? (
                        <button
                            onClick={() => logout()}
                            className="btn-nav-logout"
                        >
                            Logout
                        </button>
                    ) : null}
                </span>
            </div>
            {/* POP UP LOGOUT */}
            {/* <div className="popup-navbar" id="modal-navbar">
                <div className="popup-content-navbar">
                    <p
                        style={{
                            fontWeight: 900,
                            fontSize: 30,
                            marginTop: 50,
                        }}
                    >
                        You want to logout?
                    </p>
                    <Link to="/login" className="btn-popup-navbar">
                        Yes
                    </Link>
                    <a
                        style={{ backgroundColor: "#e7e7e7", marginTop: 20 }}
                        href="#"
                        className="close-popup-navbar"
                    >
                        Cancel
                    </a>
                </div>
            </div> */}
        </nav>
    );
};

export default Navbar;
