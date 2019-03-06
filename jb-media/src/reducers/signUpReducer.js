import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions/types";

export const signUpReducer = (state = {}, action) =>{
    switch(action.type){
    case SIGNUP_SUCCESS:
        return { ...state, registering: true, data: action.payload  };
    case SIGNUP_FAILURE:
        return { ...state, registering: false, data: action.msg };
    default:
        return state;
        
    }
}
