import { combineReducers } from 'redux';
import { signUpReducer } from './signUpReducer';
import loginReducer from "./loginRequcer";


export default combineReducers({
    signUpReducer,
    loginReducer
});
