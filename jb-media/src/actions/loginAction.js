import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "./axiosConfig"
import 'react-toastify/dist/ReactToastify.css';

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from "./types";

export const loginRequest = payload => ({
  type: LOGIN_REQUEST,
  payload
});

export const loginSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload
});

export const loginError = payload => ({
    type: LOGIN_ERROR,
    payload
  });

export const loginUser = data => (dispatch) => {
    return axios
      .post(`${BASE_URL}/users/login/`, data)
      .then(response => {
        toast.success("Welcome" + " " + response.data.user.username);
        console.log(response.data.user.username)
        dispatch(loginSuccess(response.data));
      })
      .catch(error => {
        // console.log(error.response.data.errors.error[0])
        // console.log(error.response.data.errors.email[0])
        dispatch(loginError(error.response.data));
        // toast.error("Failed!" + " "+ error.response.data.errors.error[0]);
        toast.error("Login Failed! Kindly check your credentials");
      });
};