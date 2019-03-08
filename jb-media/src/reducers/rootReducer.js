import { combineReducers } from 'redux';
import { signUpReducer } from './signUpReducer';
import loginReducer from "./loginRequcer";
import getPostsReducer from "./getPostsReducer";


export default combineReducers({
    signUpReducer,
    loginReducer,
    getPostsReducer
});
