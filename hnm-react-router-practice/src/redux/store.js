import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducers"
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";


// 기존 redux createStore
// combineReducer, thunk, applyMiddleware, composeWithDevTools
// let store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunk))
// );

// redux toolkit configureStore -> 위의 4가지 모두 필요 X
const store = configureStore({
    reducer:{
        auth: authenticateReducer,
        product: productReducer,
    }
})

export default store;