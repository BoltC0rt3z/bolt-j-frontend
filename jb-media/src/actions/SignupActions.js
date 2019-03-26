import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import urlPath from "./unProtectedRouteUrl";
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./types";
// import { ToastContainer, toast } from 'react-toastify';

export const signUpSuccess = (data) =>({
    type: SIGNUP_SUCCESS,
    payload: data
});

export const signUpError = (errors) =>({
    type: SIGNUP_FAILURE,
    msg: errors
});

export const registerUser = userdata => dispatch =>{
    // console.log(userdata)
    urlPath
    .request({
        method: "post",
        url: `/users/`,
        data: { user: userdata}
    })
    .then((res)=>{
        // console.log(res.data);
        // i will check res content and correct this
        dispatch(signUpSuccess(res.data));
        toast.success("Registered");
        // toast.success("registered");
    })
    .catch((err)=>{
        if(err.status === 500){
            toast.success("Registered");
        }
        toast.error("register failed");
        console.log((err.response.data.errors))
        // i will check err content and correct this
        dispatch(signUpError(err.response.data.errors)[0][0]);
        
    });
};
