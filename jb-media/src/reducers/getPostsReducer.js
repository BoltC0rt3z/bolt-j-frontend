import {GET_POST_SUCCESS, GET_POST_FAILURE} from "../actions/types";

const initialState = {};

const getPostReducer = (state = initialState, action) =>{
    switch (action.type){
        case GET_POST_SUCCESS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_POST_FAILURE:
            return{
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}

export default getPostReducer;
