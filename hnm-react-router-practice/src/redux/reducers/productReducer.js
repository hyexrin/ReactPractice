let initailState = {
    productList: [],
    productDetail: [],
}  

function productReducer(state = initailState, action) {
    let {type, payload} = action
    switch(type) {
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList: payload.data};
        case "GET_PRODUCT_DETAIL":
            return {...state, productDetail: payload.data};
        default:
            return {...state};
    }
}

export default productReducer;