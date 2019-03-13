import { CREATE_POST_SUCCESS,CREATE_POST_FAILURE} from "./types";
import urlPath from "./axiosConfig";

export const createPostSuccess = (postResData) =>({
    type: CREATE_POST_SUCCESS,
    payload: postResData
});

export const createPostFailure = (errMsg) =>({
    type: CREATE_POST_FAILURE,
    msg: errMsg
});

const createPost = (postData) =>(dispatch)=>{
    urlPath
    .request({
        method:"post",
        url:`/articles/`,
        data: postData
    })
    .then((res)=>{
        dispatch(createPostSuccess(res))
    })
    .catch((err)=>{
        dispatch(createPostFailure(err.response))
    })

}
export default createPost;
