import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE} from "../actions/types";

const initialState = {}

const getProfileReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_PROFILE_SUCCESS:
            return{
                ...state,
                profile: action.payload
            }
        case GET_PROFILE_FAILURE:
            return{
                ...state,
                errors: action.payload
            }
        default:
            return state
    }
}
export default getProfileReducer;