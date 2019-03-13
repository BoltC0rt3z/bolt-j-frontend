import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE} from "./types";
import urlPath from "./axiosConfig";

export const getProfileSuccess = (userProfile) =>({
    type:GET_PROFILE_SUCCESS,
    payload: userProfile
});

export const getProfileFailure = (errMsg) =>({
    type:GET_PROFILE_FAILURE,
    payload: errMsg
});

const getProfile = (username) => (dispatch) =>{
    console.log("Anycoolthingforprofile", username)
    urlPath
    .request({
        method:"get",
        url: `/profiles/${username}`
    })
    .then((res) =>{
        console.log("Anycoolthingforprofile", res.data)
        dispatch(getProfileSuccess(res.data))
    })
    .catch((err) =>{
        console.log("Anerroniousthingforprofile", err)
        dispatch(getProfileFailure(err))
    })
}
export default getProfile;