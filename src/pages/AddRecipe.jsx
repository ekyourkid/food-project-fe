// eslint-disable-next-line no-unused-vars
import React from "react";
import "./addRecipe.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postRecipe } from "../redux/action/recipes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function AddRecipe() {
    const dispatch = useDispatch();
    const recipes_post = useSelector((state) => state.recipes_post);
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const [inputData, setInputData] = useState({
        title: "",
        ingridient: "",
        category_id: "",
        photo_url: "",
    });

    const postData = (event) => {
        event.preventDefault();
        let bodyData = new FormData();
        bodyData.append("title", inputData.title);
        bodyData.append("ingredient", inputData.ingridient);
        bodyData.append("category_id", inputData.category_id);
        bodyData.append("photo", photo);

        dispatch(postRecipe(bodyData, navigate));
    };
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target?.id]: e.target.value });
    };
    const onChangePhoto = (e) => {
        setPhoto(e.target.files[0]);

        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setInputData({
                ...inputData,
                photo_url: readerEvent.target.result,
            });
        };
    };
    console.log(inputData);

    useEffect(() => {
        dispatch({ type: "POST_RECIPE_RESET" });
    }, []);

    return (
        <>
            <Navbar />
            <main className="main-add">
                <div className="main-div-add">
                    <form className="section-add" onSubmit={postData}>
                        <input
                            type="file"
                            id="inputFile"
                            name="inputFile"
                            required
                            onChange={onChangePhoto}
                        />
                        <label
                            style={{ backgroundColor: "#F6F5F4" }}
                            htmlFor="inputFile"
                        >
                            {photo && (
                                <img src={inputData.photo_url} width={150} />
                            )}
                            Add Photo
                        </label>
                        <input
                            style={{
                                width: 1300,
                                height: 100,
                                borderRadius: 15,
                                paddingLeft: 50,
                                fontSize: 24,
                                fontWeight: 500,
                                backgroundColor: "#F6F5F4",
                                cursor: "pointer",
                            }}
                            type="text"
                            className="form-control-addRecipe"
                            id="title"
                            name="title"
                            placeholder="Title"
                            required
                            onChange={onChange}
                            htmlFor="inputTitle"
                        />
                        <textarea
                            style={{
                                width: 1300,
                                height: 380,
                                borderRadius: 15,
                                paddingLeft: 50,
                                paddingTop: 40,
                                fontSize: 24,
                                backgroundColor: "#F6F5F4",
                                fontWeight: 500,
                            }}
                            className="textArea-control-addRecipe"
                            id="ingridient"
                            name="ingridient"
                            rows={3}
                            placeholder="Ingredients"
                            htmlFor="inputIngredients"
                            required
                            onChange={onChange}
                        />
                        <select
                            style={{
                                width: 243,
                                borderRadius: 15,
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#666666",
                                backgroundColor: "#F6F5F4",
                                cursor: "pointer",
                            }}
                            id="category_id"
                            name="category_id"
                            className="form-select form-select-lg mb-3"
                            aria-label="Large select example"
                            htmlFor="inputCategory"
                            required
                            onChange={onChange}
                        >
                            <option value="">Category</option>
                            <option value="1">Main Course</option>
                            <option value="2">Dessert</option>
                            <option value="3">Appetizer</option>
                        </select>
                        <button
                            type="submit"
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textDecoration: "none",
                            }}
                            className="button-post-add"
                        >
                            Post
                        </button>
                    </form>
                </div>

                {recipes_post.isError ? (
                    <div className="alert alert-danger">
                        {" "}
                        create new recipe failed :
                        {recipes_post.ErrorMessage ?? "-"}
                    </div>
                ) : null}
                {recipes_post.isLoading ? (
                    <div className="alert alert-primary" style={{ margin: 20 }}>
                        Please Wait for loading data ...
                    </div>
                ) : null}
            </main>
            <Footer />
        </>
    );
}
