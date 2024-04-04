// eslint-disable-next-line no-unused-vars
import "./home.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import axios from "axios";
import { useEffect, useState } from "react";
import { getRecipe, searchRecipe } from "../redux/action/recipes";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
    const authdata = useSelector((state) => state.auth.data);
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.recipes);
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        dispatch(searchRecipe(searchQuery));
    };

    useEffect(() => {
        dispatch(getRecipe());
    }, []);

    return (
        <>
            <Navbar />
            <main className="home-main">
                <div className="line1" />
                <div className="line2" />
                <section className="section-home">
                    <div className="section-heroText-home">
                        <h1
                            style={{
                                fontSize: 72,
                                fontWeight: 500,
                                color: "#2e266f",
                            }}
                        >
                            Discover Recipe &amp; Delicious Food
                        </h1>
                    </div>
                    <div className="section-search-home">
                        <input
                            type="search"
                            className="form-control-home"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Telur Gulung"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            onClick={() => handleSearch()}
                            type="submit"
                            className="button-search-section-home"
                        >
                            Search
                        </button>
                    </div>
                    <div className="section-button-home">
                        <button className="category-new-home">New</button>
                        <button className="category-popular-home">
                            Popular
                        </button>
                        <button className="category-veget-home">
                            Vegetarian
                        </button>
                        <button className="category-break-home">
                            Breakfast
                        </button>
                    </div>
                </section>
                {recipe.isLoading ? (
                    <div className="alert alert-primary" style={{ margin: 20 }}>
                        Please Wait for loading data ...
                    </div>
                ) : null}
                {recipe.isSuccess && recipe.data
                    ? recipe.data.map((item, index) => (
                          <Link
                              key={index}
                              to={`/detailRecipe/${item.id}`}
                              className="aside-home"
                          >
                              <div className="aside-img-container">
                                  <img
                                      src={item.photo}
                                      width="500px"
                                      height="500px"
                                      alt="pempek-photo"
                                      className="image-recipe"
                                  />
                                  <div className="overlay-image">
                                      <div className="text-image">
                                          Check Detail
                                      </div>
                                  </div>
                              </div>
                              <div className="aside-text-container-home">
                                  <span className="aside-text">
                                      <h1
                                          style={{
                                              fontWeight: 500,
                                              fontSize: 32,
                                              width: "auto",
                                              height: 96,
                                          }}
                                      >
                                          {item.title}
                                      </h1>
                                      <h1 style={{ fontSize: 24 }}>
                                          Ingredients:
                                      </h1>
                                      <p
                                          style={{
                                              width: "200px",
                                              fontSize: 24,
                                              fontWeight: 500,
                                              color: "#3f3a3a",
                                              paddingTop: 10,
                                              display: "block",
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
                                      }}
                                  >
                                      10 Likes - 12 Comment - 3 Bookmark
                                  </h1>
                                  <span
                                      style={{
                                          display: "flex",
                                          justifyContent: "space-between",
                                          alignItems: "center",
                                          width: 220,
                                          marginTop: 125,
                                      }}
                                  >
                                      {authdata.data ? (
                                          <img
                                              src={
                                                  authdata?.data?.photo_profile
                                              }
                                              width="68px"
                                              height="65px"
                                              alt="karen-photo"
                                              style={{ borderRadius: 40 }}
                                          />
                                      ) : null}
                                      {authdata.data ? (
                                          <h1
                                              style={{
                                                  fontWeight: 500,
                                                  fontSize: 24,
                                              }}
                                          >
                                              {authdata?.data?.username}
                                          </h1>
                                      ) : null}
                                  </span>
                              </div>
                          </Link>
                      ))
                    : null}
                <article className="article">
                    <h1
                        style={{
                            width: 284,
                            height: 62,
                            fontWeight: 500,
                            fontSize: 32,
                            color: "#3f3a3a",
                        }}
                    >
                        Show 1-5 from 20
                    </h1>
                    <button
                        style={{
                            width: 105,
                            height: 64,
                            borderRadius: 6,
                            backgroundColor: "#efc81a",
                            fontWeight: 500,
                            fontSize: 16,
                            textAlign: "center",
                            border: "none",
                            marginLeft: 40,
                            color: "#ffffff",
                        }}
                    >
                        Next
                    </button>
                </article>
            </main>
            <Footer />
        </>
    );
}
