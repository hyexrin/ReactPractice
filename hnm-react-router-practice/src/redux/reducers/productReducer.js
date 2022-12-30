import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    productDetail: [],
}

// 기존 redux
// function productReducer(state = initailState, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, productList: payload.data};
//         case "GET_PRODUCT_DETAIL":
//             return {...state, productDetail: payload.data};
//         default:
//             return {...state};
//     }
// }

// export default productReducer;

// redux toolkit 활용
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action) {
            state.productDetail = action.payload.data;
        }
    }
});

console.log("ppp", productSlice)

export const productActions = productSlice.actions;
export default productSlice.reducer;