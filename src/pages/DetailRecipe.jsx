// eslint-disable-next-line no-unused-vars
import React from "react";
import "./detailRecipe.css";
import userPhoto from "../assets/user.png";
import markahIcon from "../assets/bookmark.png";
import likeIcon from "../assets/like.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail } from "../redux/action/recipes";

export default function DetailRecipe() {
    const dispatch = useDispatch();
    const recipes_detail = useSelector((state) => state.recipes_detail);
    const { id } = useParams();
    const authdata = useSelector((state) => state.auth.data);

    useEffect(() => {
        dispatch(getRecipeDetail(id));
    }, []);

    return (
        <>
            <Navbar />
            <main className="main-detail-card">
                <div className="main-div-detail">
                    <section className="section-detail">
                        <Link to="/detailProfile" className="nav-right-detail">
                            <span className="nav-photo-detail">
                                {authdata.data ? (
                                    <img
                                        style={{
                                            marginLeft: 20,
                                            width: 64,
                                            height: 64,
                                            borderRadius: 30,
                                        }}
                                        src={authdata?.data?.photo_profile}
                                        alt="user-photo"
                                    />
                                ) : null}
                            </span>
                            <span className="nav-text-detail">
                                {authdata.data ? (
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
                                <h1
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 900,
                                        color: "#000000",
                                    }}
                                >
                                    10 Recipes
                                </h1>
                            </span>
                        </Link>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                    color: "#000000",
                                    textAlign: "right",
                                }}
                            >
                                21 February 2023
                            </h1>
                            <h1
                                style={{
                                    fontWeight: 500,
                                    fontSize: 24,
                                    color: "#000000",
                                    textAlign: "right",
                                    marginTop: "-30px",
                                }}
                            >
                                20 Likes - 2 Comments
                            </h1>
                        </div>
                    </section>
                    {recipes_detail.isLoading ? (
                        <div className="alert alert-primary">
                            {" "}
                            Please wait for detail recipe{" "}
                        </div>
                    ) : null}

                    <aside className="aside-detail">
                        <h1
                            style={{
                                fontWeight: 500,
                                fontSize: 72,
                                color: "#2e266f",
                            }}
                        >
                            {recipes_detail?.data?.title}
                        </h1>
                        <img
                            style={{
                                borderRadius: 15,
                                color: "#c4c4c4",
                                marginTop: 60,
                                objectFit: "    ",
                            }}
                            src={recipes_detail?.data?.photo}
                            width="1082px"
                            height="700px"
                            alt="egg"
                        />
                    </aside>
                    <article className="article-detail">
                        <h1
                            style={{
                                fontWeight: 500,
                                fontSize: 48,
                                color: "#3f3a3a",
                                marginLeft: 27,
                            }}
                        >
                            Ingredients
                        </h1>
                        <ul
                            style={{
                                listStyleType: "none",
                                fontSize: 36,
                                color: "#000000",
                            }}
                        >
                            <li style={{ listStyle: "inside" }}>
                                {recipes_detail?.data?.ingredient}
                            </li>
                        </ul>
                    </article>

                    <article className="article2-detail">
                        <div>
                            <button
                                style={{
                                    backgroundColor: "#efc81a",
                                    borderRadius: 16,
                                    border: "none",
                                    outline: "none",
                                    width: 52,
                                    height: 52,
                                }}
                            >
                                <img
                                    src={markahIcon}
                                    width="34.67px"
                                    height="34.67px"
                                    alt="bookmark"
                                />
                            </button>
                            <button
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: 16,
                                    border: "none",
                                    outline: "1px solid #efc81a",
                                    width: 52,
                                    height: 52,
                                    marginLeft: 12,
                                }}
                            >
                                <img
                                    src={likeIcon}
                                    width="34.67px"
                                    height="34.67px"
                                    alt="like-icon"
                                />
                            </button>
                        </div>
                        <div className="comment-section-detail">
                            <div style={{ display: "flex" }}>
                                <span
                                    style={{
                                        width: "25vh",
                                        height: 97,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-around",
                                        borderRight: "5px solid #efc81a",
                                    }}
                                >
                                    <img
                                        src={userPhoto}
                                        width="64px"
                                        height="64px"
                                        alt="user-comment"
                                    />
                                    <span
                                        style={{
                                            height: "fit-content",
                                            paddingRight: 20,
                                        }}
                                    >
                                        <h1
                                            style={{
                                                fontWeight: 500,
                                                fontSize: 24,
                                            }}
                                        >
                                            Karen
                                        </h1>
                                        <h1
                                            style={{
                                                fontWeight: 900,
                                                fontSize: 24,
                                            }}
                                        >
                                            20 Recipes
                                        </h1>
                                    </span>
                                </span>
                                <h1
                                    style={{
                                        width: "fit-content",
                                        fontWeight: 500,
                                        fontSize: 24,
                                        display: "flex",
                                        alignItems: "center",
                                        marginLeft: 30,
                                    }}
                                >
                                    Wow, I just made this and it was delicious!
                                    Thanks for sharing!
                                </h1>
                            </div>
                            <div style={{ display: "flex" }}>
                                <span
                                    style={{
                                        width: "25vh",
                                        height: 97,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-around",
                                        borderRight: "5px solid #efc81a",
                                    }}
                                >
                                    <img
                                        src={userPhoto}
                                        width="64px"
                                        height="64px"
                                        alt="user-comment"
                                    />
                                    <span
                                        style={{
                                            height: "fit-content",
                                            paddingRight: 20,
                                        }}
                                    >
                                        <h1
                                            style={{
                                                fontWeight: 500,
                                                fontSize: 24,
                                            }}
                                        >
                                            Karen
                                        </h1>
                                        <h1
                                            style={{
                                                fontWeight: 900,
                                                fontSize: 24,
                                            }}
                                        >
                                            20 Recipes
                                        </h1>
                                    </span>
                                </span>
                                <h1
                                    style={{
                                        width: "fit-content",
                                        fontWeight: 500,
                                        fontSize: 24,
                                        display: "flex",
                                        alignItems: "center",
                                        marginLeft: 30,
                                    }}
                                >
                                    Wow, I just made this and it was delicious!
                                    Thanks for sharing!
                                </h1>
                            </div>
                        </div>
                        <div>
                            <div className="mb-3">
                                <textarea
                                    style={{
                                        width: 813,
                                        height: 252,
                                        marginTop: "10vh",
                                        paddingLeft: 35,
                                        paddingTop: 30,
                                    }}
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows={3}
                                    placeholder="Your comment here!"
                                    defaultValue={""}
                                />
                            </div>
                            <button className="button-comment">
                                Send a comment
                            </button>
                        </div>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}
