// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegistPage from "./pages/RegistPage";
import LoginPage from "./pages/LoginPage";
import ForgoPassword from "./pages/ForgoPassword";
import Home from "./pages/Home";
import DetailRecipe from "./pages/DetailRecipe";
import AddRecipe from "./pages/AddRecipe";
import EditRecipe from "./pages/EditRecipe";
import DetailProfile from "./pages/DetailProfile";
import BookmarkProfile from "./pages/BookmarkProfile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import Auth from "./components/Auth";
// import { Axios } from "axios";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to="/landingPage" replace={true} />}
                    />
                    <Route path="/landingPage" element={<LandingPage />} />
                    <Route path="/register" element={<RegistPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/forgotPassword" element={<ForgoPassword />} />
                    <Route
                        path="/home"
                        element={
                            <Auth>
                                <Home />
                            </Auth>
                        }
                    />
                    <Route
                        path="/detailRecipe/:id"
                        element={<DetailRecipe />}
                    />
                    <Route
                        path="/addRecipe"
                        element={
                            <Auth>
                                <AddRecipe />
                            </Auth>
                        }
                    />
                    <Route path="/editRecipe/:id" element={<EditRecipe />} />
                    <Route path="/detailProfile" element={<DetailProfile />} />
                    <Route
                        path="/bookmarkProfile"
                        element={<BookmarkProfile />}
                    />
                    <Route path="/editProfile" element={<EditProfile />} />
                    <Route
                        path="/changePassword"
                        element={<ChangePassword />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

// USE EFFECT
// useEffect(() => {
//     console.log("use effect");
//     // mengambil data tanpa harus membuat button get data
//     getUser();
// }, []);

// USE STATE
// function App() {
//     const [count, setCount] = useState(0);
//     const [title, setTitle] = useState("hello");

//     const ChangeTitle = () => {
//         setTitle("Hello from button function");
//     };
//     return (
//         <>
//             <button onClick={() => setCount((count) => +1)}>
//                 Count is {count}
//             </button>
//             <button onClick={() => setTitle("hello from button function")}>
//                 Change title
//             </button>
//             <button onClick={ChangeTitle}>Change Title With Function</button>
//         </>
//     );
// }

// GET DATA LEWAT AXIOS
// function App() {
//     const [data, setData] = useState([]);
//     const [error, setError] = useState("");

//     const Reset = () => {
//         setData();
//         setError();
//     };

//     async function getUser() {
//         try {
//             // true
//             const response = await Axios.get("");
//             setError("");
//             setData(response.data);
//             console.log(response);
//         } catch (error) {
//             // false
//             console.error(error);
//             setError(error.message);
//         }
//     }
//     return (
//         <>
//             <div>
//                 <button onClick={getUser}>Get Data</button>
//                 {data.length
//                     ? data.map((item, index) => {
//                           return (
//                               <div>
//                                   <h5>{item.name}</h5>
//                               </div>
//                           );
//                       })
//                     : null}
//                 {error ? <p>{error}</p> : null}
//             </div>
//         </>
//     );
// }
