import { authActions } from "../reducers/authenticateReducer";

function login(id, password) {
    return (dispatch, getState) => {
        console.log('login success action');
        // dispatch({type: "LOGIN_SUCCESS", payload: {id, password}});
        dispatch(authActions.getLogin({id, password}));
    };
}

export const authenticateAction = {login}