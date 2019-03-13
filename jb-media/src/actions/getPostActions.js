// import axios from "axios";
import {GET_POST_SUCCESS, GET_POST_FAILURE } from "./types";
import urlPath from "./unProtectedRouteUrl";

export const fetchPostSuccess = (fetchedposts) =>({
    type: GET_POST_SUCCESS,
    payload: fetchedposts
});

export const fetchPostFailure = (errorMsg) =>({
    type: GET_POST_FAILURE,
    payload: errorMsg
});

const fetchPosts = () => (dispatch)=>{
    urlPath
    .request({
        method: "get",
        url:`/articles/`
    })
    .then((res) =>{
        console.log(res.data.results);
        dispatch(fetchPostSuccess(res.data.results))
    })
    .catch((err) =>{
        console.log("sndcknsnbshkdiewkjdc",err);
        dispatch(fetchPostFailure(err))
    })
}
export default fetchPosts;
