import { LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/types";

const states = {};

const loginReducer = (state = states, action) => {
  switch (action.type) {
    // case LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     message: action.payload
    //   };
    case LOGIN_SUCCESS:
      const token = action.payload.users
        ? action.payload.users.user.token : action.payload.user.token;
      localStorage.setItem("token", `Bearer ${token}`);
      localStorage.setItem("username", (action.payload.users
        ? action.payload.users.user.username : action.payload.user.username));
      localStorage.setItem("isLoggedIn", true);
      return {
        ...state,
        token,
        errors: {},
        isLoggedIn: true,
        username: action.payload.users
          ? action.payload.users.user.username : action.payload.user.username,
        message: "Successfully logged in."
      };
    case LOGIN_ERROR:
      return {
        ...state,
        message: action.payload.error
      };
    default:
      return state;
  }
};
export default loginReducer;
