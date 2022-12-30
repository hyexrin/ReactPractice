import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    id: '',
    password: '',
    authenticate: false,
}

// function authenticateReducer(state = initialState, action) {
//     let {type, payload} = action
//     switch(type) {
//         case "LOGIN_SUCCESS":
//             console.log('login success reducer');
//             return {...state, id: payload.id, password: payload.password, authenticate: true}
//         default:
//             return {...state}
//     }
// }

// export default authenticateReducer;

const authenticateSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getLogin(state, action) {
            state.id = action.payload.id;
            state.password = action.payload.password;
            state.authenticate = true;
        }
    }
})

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer;