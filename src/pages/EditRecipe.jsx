// eslint-disable-next-line no-unused-vars
import React from "react";
import "./editRecipe.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetail, updateRecipe } from "../redux/action/recipes";

export default function EditRecipe() {
    const recipeDetail = useSelector((state) => state.recipes_detail);
    const recipeUpdate = useSelector((state) => state.recipes_update);
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const [photo, setPhoto] = useState();
    const [inputData, setInputData] = useState({
        title: "",
        ingridient: "",
        category_id: "",
        photo_url: "",
    });

    useEffect(() => {
        dispatch(getRecipeDetail(id));
        dispatch({ type: "UPDATE_RECIPE_RESET" });
    }, []);

    const updateData = (event) => {
        event.preventDefault();
        let bodyData = new FormData();
        bodyData.append("title", inputData.title);
        bodyData.append("ingredient", inputData.ingridient);
        bodyData.append("category_id", inputData.category_id);
        bodyData.append("photo", photo);

        dispatch(updateRecipe(id, bodyData, navigate));
    };
    const onChange = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
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
    const handdleButtonClick = () => {
        window.scrollTo(0, 0);
    };
    console.log(inputData);
    return (
        <>
            <Navbar />
            <main className="main-edit">
                <div className="main-div-edit">
                    <form onSubmit={updateData} className="section-edit">
                        <input
                            type="file"
                            id="inputFile"
                            name="inputFile"
                            onChange={onChangePhoto}
                        />
                        <label htmlFor="inputFile" className="labelEdit">
                            {photo ? (
                                <img
                                    src={inputData.photo_url}
                                    className="image-editRecipe"
                                />
                            ) : (
                                <img
                                    src={recipeDetail.data?.photo}
                                    className="image-editRecipe"
                                />
                            )}
                            <h1
                                style={{
                                    width: 426,
                                    height: 64,
                                    backgroundColor: "#30c0f3",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: 6,
                                    fontSize: 16,
                                    fontWeight: 500,
                                    color: "#ffffff",
                                    position: "absolute",
                                }}
                            >
                                Change Photo
                            </h1>
                        </label>
                        <input
                            style={{
                                width: 1300,
                                height: 100,
                                borderRadius: 15,
                                paddingLeft: 50,
                                fontSize: 24,
                                fontWeight: 500,
                            }}
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            onChange={onChange}
                            placeholder={recipeDetail.data?.title}
                        />
                        <div style={{}}>
                            <textarea
                                style={{
                                    width: 1300,
                                    height: 380,
                                    borderRadius: 15,
                                    paddingLeft: 50,
                                    paddingTop: 40,
                                    fontSize: 24,
                                    fontWeight: 400,
                                }}
                                className="textArea-control-editRecipe"
                                id="ingridient"
                                name="ingridient"
                                rows={3}
                                placeholder={recipeDetail.data?.ingredient}
                                onChange={onChange}
                            />
                        </div>
                        <select
                            id="category_id"
                            name="category_id"
                            onChange={onChange}
                            style={{
                                width: 243,
                                borderRadius: 15,
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#666666",
                                cursor: "pointer",
                            }}
                            value={
                                inputData.category_id
                                    ? inputData?.category_id
                                    : recipeDetail.data?.category_id
                            }
                            className="form-select form-select-lg mb-3"
                            aria-label="Large select example"
                        >
                            <option value="">Select Category</option>
                            <option value="1">main course</option>
                            <option value="2">dessert</option>
                            <option value="3">appetizer</option>
                        </select>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textDecoration: "none",
                            }}
                        >
                            <button
                                type="submit"
                                onClick={handdleButtonClick}
                                className="button-post"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
                {recipeUpdate.isLoading ? (
                    <div className="alert alert-primary">Loading ...</div>
                ) : null}
                {recipeUpdate.isError ? (
                    <div className="alert alert-danger">
                        Update menu failed: {recipeUpdate.errorMessage ?? " - "}
                    </div>
                ) : null}
            </main>
            <Footer />
        </>
    );
}
