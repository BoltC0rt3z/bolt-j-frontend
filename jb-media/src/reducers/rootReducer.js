import { combineReducers } from 'redux';
import { signUpReducer } from './signUpReducer';
import loginReducer from "./loginReducer";
import getPostsReducer from "./getPostsReducer";
import createPostReducer from "./createPostReducer";


export default combineReducers({
    signUpReducer,
    loginReducer,
    getPostsReducer,
    createPostReducer
});
