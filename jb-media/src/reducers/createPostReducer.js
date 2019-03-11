import {CREATE_POST_SUCCESS, CREATE_POST_FAILURE} from "../actions/types";

const initialState = {}

const createPostReducer = (state = initialState, action) =>{
    switch(action.type){
        case CREATE_POST_SUCCESS:
            return {
                ...state,
                post: action.payload
            }
        case CREATE_POST_FAILURE:
            return {
                ...state,
                errors: action.msg
            }
        default:
            return state
    }

}
export default createPostReducer;