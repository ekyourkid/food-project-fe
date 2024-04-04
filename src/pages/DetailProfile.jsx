// eslint-disable-next-line no-unused-vars
import React from "react";
import "./detailProfile.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { deleteRecipe, getRecipe } from "../redux/action/recipes";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DetailProfile() {
    const authdata = useSelector((state) => state.auth.data);
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getRecipe(id));
    }, []);
    const handleButtonClick = () => {
        window.scrollTo(0, 0);
    };
    return (
        <>
            <Navbar />
            <main className="main-detail-profile">
                <div className="main-div-detail-profile">
                    <section className="section-detail-profile">
                        <div className="nav-rigth-detail-profile">
                            <span
                                href="./editProfile.html"
                                className="nav-photo-detail-profile"
                            >
                                {authdata?.data ? (
                                    <img
                                        style={{
                                            marginLeft: 20,
                                            width: 64,
                                            height: 64,
                                            borderRadius: 40,
                                        }}
                                        src={authdata?.data?.photo_profile}
                                        alt="user-photo"
                                    />
                                ) : null}
                            </span>
                            <span className="nav-text-detail-profile">
                                {authdata?.data ? (
                                    <h1
                                        style={{
                                            fontSize: 18,
                                            fontWeight: 500,
                                            color: "#000000",
                                        }}
                                    >
                                        {authdata?.data?.username}
                                    </h1>
                                ) : null}
                                <h1
                                    style={{
                                        fontSize: 19,
                                        fontWeight: 800,
                                        color: "#000000",
                                    }}
                                >
                                    10 Recipes
                                </h1>
                            </span>
                        </div>
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
                        </div>
                    </section>
                    <aside className="aside-detail-profile">
                        <nav className="nav-detail-profile">
                            <Link
                                style={{ color: "#3f3a3a" }}
                                className="nav-link-detail-profile"
                                aria-current="page"
                                to="/detailProfile"
                            >
                                Recipes
                            </Link>
                            <Link
                                className="nav-link-detail-profile"
                                to="/bookmarkProfile"
                            >
                                Bookmarked
                            </Link>
                            <Link className="nav-link-detail-profile" to="#">
                                Liked
                            </Link>
                        </nav>
                        {recipes.isLoading ? (
                            <div className="alert alert-primary">
                                Please wait ...
                            </div>
                        ) : null}
                        {recipes.isSuccess && recipes.data
                            ? recipes.data.map((item, index) => (
                                  <div
                                      key={index}
                                      className="card-aside-detail-profile"
                                  >
                                      <Link
                                          to={`/detailRecipe/${item.id}`}
                                          style={{ textDecoration: "none" }}
                                      >
                                          <img
                                              src={item.photo}
                                              width="500px"
                                              height="500px"
                                              alt="pempek-photo"
                                              style={{ borderRadius: 15 }}
                                          />
                                      </Link>
                                      <div className="">
                                          <span className="aside-text-detail-profile">
                                              <h1
                                                  style={{
                                                      fontWeight: 500,
                                                      fontSize: 32,
                                                      width: 132,
                                                      height: 96,
                                                  }}
                                              >
                                                  {item.title}
                                              </h1>
                                              <p
                                                  style={{
                                                      width: 245,
                                                      fontSize: 24,
                                                      fontWeight: 500,
                                                      color: "#3f3a3a",
                                                      paddingTop: 10,
                                                  }}
                                              >
                                                  {item.ingredient}
                                              </p>
                                          </span>
                                          <h1
                                              style={{
                                                  backgroundColor: "#efc81a",
                                                  width: 325,
                                                  height: 42,
                                                  borderRadius: 6,
                                                  fontWeight: 500,
                                                  fontSize: 16,
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  color: "white",
                                              }}
                                          >
                                              10 Likes - 12 Comment - 3 Bookmark
                                          </h1>
                                          <span
                                              style={{
                                                  width: 310,
                                                  display: "flex",
                                                  justifyContent:
                                                      "space-between",
                                                  marginTop: 50,
                                              }}
                                          >
                                              <Link
                                                  onClick={handleButtonClick}
                                                  style={{
                                                      textDecoration: "none",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                  }}
                                                  to={`/editRecipe/${item.id}`}
                                                  className="btn-card-edit"
                                              >
                                                  Edit Menu
                                              </Link>
                                              <button
                                                  onClick={() =>
                                                      dispatch(
                                                          deleteRecipe(item.id)
                                                      )
                                                  }
                                                  style={{
                                                      textDecoration: "none",
                                                      display: "flex",
                                                      alignItems: "center",
                                                      justifyContent: "center",
                                                  }}
                                                  className="btn-card-delete"
                                              >
                                                  Delete Menu
                                              </button>
                                          </span>
                                      </div>
                                  </div>
                              ))
                            : null}
                        {/* POP UP DELETE */}
                        {/* <div
                                          className="popup-detailProfile"
                                          id="modal-deleteRecipe"
                                      >
                                      <div className="popup-content-detailProfile">
                                      <p
                                      style={{
                                          fontWeight: 900,
                                          fontSize: 30,
                                          marginTop: 50,
                                                      textAlign: "center",
                                                    }}
                                                    >
                                                    Are you sure <br />
                                                    want to delete this recipe?
                                                    </p>
                                                    <Link
                                                  onClick={() =>
                                                      deleteRecipes(item.id)
                                                    }
                                                    to="/detailProfile"
                                                    className="btn-popup-detaiProfile"
                                                    >
                                                    Yes
                                                    </Link>
                                                    <a
                                                    style={{
                                                      backgroundColor:
                                                      "#e7e7e7",
                                                      marginTop: 20,
                                                    }}
                                                    href="#"
                                                    className="close-popup-detailProfile"
                                                    >
                                                    Cancel
                                                    </a>
                                                    </div>
                                                </div> */}
                    </aside>
                    <article className="article-detail-profile">
                        <button className="btn-article-detail-profile">
                            Prev
                        </button>
                        <h1
                            style={{
                                width: 297,
                                height: 62,
                                fontWeight: 500,
                                fontSize: 32,
                                color: "#3f3a3a",
                            }}
                        >
                            Show 6-10 from 10
                        </h1>
                    </article>
                </div>
            </main>
            <Footer />
        </>
    );
}
