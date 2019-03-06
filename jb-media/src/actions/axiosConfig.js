import axios from "axios";

const token = localStorage.getItem("token");
export const BASE_URL = "https://jbmedia.herokuapp.com/api/v1"

const urlPath = axios.create({
  baseURL: `${BASE_URL}/`,
  headers: {
    "Content-Type": "application/json"
  }
});

export default urlPath;