// // reducers/recipesReducer.js
// const initialState = {
//     isLoading: false,
//     isSuccess: false,
//     isError: false,
//     data: null,
//     error: null,
// };

// const recipesReducer = ( state = initialState, action ) =>
// {
//     if ( action.type === "GET_RECIPE_REQUEST" ) {
//         return {
//             ...state,
//             isLoading: true,
//             isSuccess: false,
//             isError: false,
//         };
//     } else if ( action.type === "GET_RECIPE_SUCCESS" ) {
//         return {
//             ...state,
//             isLoading: true,
//             isSuccess: false,
//             isError: false,
//         };
//     }
// } else if ( action.type === "GET_RECIPE_SUCCESS" ) {
//     return {
//         ...state,
//         isLoading: true,
//         isSuccess: false,
//         isError: false,
//     };
// }
//         case GET_RECIPE_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isSuccess: true,
//                 data: action.payload,
//             };
//         case GET_RECIPE_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default recipesReducer;
