// eslint-disable-next-line no-unused-vars
import React from "react";
import "./landingPage.css";
import egg from "../assets/egg2.png";
import sandwich from "../assets/sandwich.png";
import burger from "../assets/burger.png";
import grid1 from "../assets/grid1.png";
import grid2 from "../assets/grid2.png";
import grid3 from "../assets/grid3.png";
import grid4 from "../assets/grid4.png";
import grid5 from "../assets/grid5.png";
import grid6 from "../assets/grid6.png";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function LandingPage() {
    return (
        <>
            <main className="main-landingPage">
                <nav className="navbar-landingPage">
                    <div className="nav-left-landingPage">
                        <Link
                            className="register-nav-landingPage"
                            to="/register"
                        >
                            Register
                        </Link>
                        <Link className="login-nav-landingPage" to="/login">
                            Login
                        </Link>
                        <Link className="search-menu-nav-landingPage" to={"#"}>
                            Search Menu
                        </Link>
                    </div>
                    <div className="nav-rigth-landingPage" />
                </nav>
                <section className="section-landingPage">
                    <div>
                        <h1
                            style={{
                                fontWeight: 500,
                                fontSize: 72,
                                paddingLeft: 40,
                                color: "#2e266f",
                            }}
                        >
                            Discover Recipe <br />
                            &amp; Delicious Food
                        </h1>
                    </div>
                    <div>
                        <img
                            style={{
                                position: "absolute",
                                right: "20vh",
                                top: "20vh",
                            }}
                            src={egg}
                            alt="egg-photo"
                            width="700px"
                            height="700px"
                        />
                    </div>
                </section>
                <aside className="aside-landingPage">
                    <div
                        style={{
                            marginTop: 100,
                            width: "fit-content",
                            height: 140,
                            borderLeft: "25px solid #efc81a",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <h1
                            style={{
                                paddingLeft: 30,
                                fontWeight: 500,
                                fontSize: 48,
                                lineHeight: 62,
                                color: "#3f3a3a",
                            }}
                        >
                            Popular For You !
                        </h1>
                    </div>
                    <div className="card-aside-landingPage">
                        <div>
                            <img
                                style={{
                                    position: "absolute",
                                    zIndex: 2,
                                    top: "140%",
                                }}
                                src={sandwich}
                                alt="sandwich"
                                width="830px"
                            />
                            <div
                                style={{
                                    width: 683,
                                    height: 801,
                                    outline: "3px solid #efc81a",
                                    position: "absolute",
                                    zIndex: 1,
                                    top: "150%",
                                    left: "15%",
                                    borderRadius: 3,
                                }}
                            />
                        </div>
                        <div
                            style={{
                                marginBottom: "25vh",
                                width: 570,
                                height: 510,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 50,
                                    color: "#3f3a3a",
                                }}
                            >
                                Healthy Bone Broth Ramen (Quick & <br /> Easy)
                            </h1>
                            <p
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                    letterSpacing: "4%",
                                    marginTop: -60,
                                }}
                            >
                                Quick + Easy Chicken Bone Broth Ramen- Healthy
                                chicken ramen in a hurry? Thats <br />
                                right!
                            </p>
                            <button
                                style={{
                                    width: 200,
                                    height: "84.78px",
                                    borderRadius: 8,
                                    border: "none",
                                    backgroundColor: "#efc81a",
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "white",
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </aside>
                <aside className="aside2-landingPage">
                    <div
                        style={{
                            marginTop: 100,
                            width: "fit-content",
                            height: 140,
                            borderLeft: "25px solid #efc81a",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <h1
                            style={{
                                paddingLeft: 30,
                                fontWeight: 500,
                                fontSize: 48,
                                lineHeight: 62,
                                color: "#3f3a3a",
                            }}
                        >
                            New Recipe
                        </h1>
                    </div>
                    <div className="card-aside-landingPage">
                        <div>
                            <img
                                style={{
                                    position: "absolute",
                                    zIndex: 2,
                                    top: "296%",
                                }}
                                src={burger}
                                alt="sandwich"
                                width="800px"
                                height="800px"
                            />
                            <div
                                style={{
                                    width: 514,
                                    height: 820,
                                    backgroundColor: "#efc81a",
                                    position: "absolute",
                                    zIndex: 1,
                                    top: "287%",
                                    left: 0,
                                }}
                            />
                        </div>
                        <div
                            style={{
                                marginBottom: "25vh",
                                width: 570,
                                height: 510,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 56,
                                    color: "#3f3a3a",
                                }}
                            >
                                Healthy Bone Broth <br />
                                Ramen (Quick &amp; Easy)
                            </h1>
                            <p
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                    letterSpacing: "4%",
                                }}
                            >
                                Quick + Easy Chicken Bone Broth Ramen- Healthy
                                chicken ramen in a hurry? Thats <br />
                                right!
                            </p>
                            <button
                                style={{
                                    width: 200,
                                    height: "84.78px",
                                    borderRadius: 8,
                                    border: "none",
                                    background: "#efc81a",
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: "white",
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </aside>
                <aside className="aside3-landingPage">
                    <div
                        style={{
                            marginTop: 100,
                            width: "fit-content",
                            height: 140,
                            borderLeft: "25px solid #efc81a",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <h1
                            style={{
                                paddingLeft: 30,
                                fontWeight: 500,
                                fontSize: 48,
                                lineHeight: 62,
                                color: "#3f3a3a",
                            }}
                        >
                            Popular Recipe
                        </h1>
                    </div>
                    <div className="grid-container-landingPage">
                        <div
                            className="grid-item-landingPage"
                            style={{
                                backgroundImage: `url(${grid1})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <h1>
                                Chiken <br />
                                Kare
                            </h1>
                        </div>
                        <div
                            className="grid-item-landingPage"
                            style={{
                                backgroundImage: `url(${grid2})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <h1>
                                Bomb <br />
                                Chicken
                            </h1>
                        </div>
                        <div
                            className="grid-item-landingPage"
                            style={{
                                backgroundImage: `url(${grid3})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <h1>
                                Banana <br />
                                Smothie Pop
                            </h1>
                        </div>
                        <div
                            className="grid-item-landingPage"
                            style={{
                                backgroundImage: `url(${grid4})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <h1>
                                Coffe <br />
                                Lava Cake
                            </h1>
                        </div>
                        <div
                            className="grid-item-landingPage"
                            style={{
                                backgroundImage: `url(${grid5})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <h1>
                                Sugar <br />
                                Salmon
                            </h1>
                        </div>
                        <div
                            className="grid-item-landingPage"
                            style={{
                                backgroundImage: `url(${grid6})`,
                                backgroundSize: "cover",
                            }}
                        >
                            <h1>
                                Indian <br />
                                Salad
                            </h1>
                        </div>
                    </div>
                </aside>
            </main>
            <Footer className="footer" />
        </>
    );
}
