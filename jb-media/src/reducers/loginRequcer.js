import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/types";

const states = {};

const loginReducer = (state = states, action) => {
  switch (action.types) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload
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
// const loginReducer = (state = states, action) => {
//   switch (action.type) {
//     case FOLLOW_UNFOLLOW_SUCCESS:
//       return {
//         ...state,
//         follow_data: action.payload.following
//       };
//     case FOLLOWERS_COUNT:
//       return {
//         ...state,
//         followers_count: action.payload.length,
//         followers: action.payload
//       };
//     case FOLLOWING_COUNT:
//       return {
//         ...state,
//         following_count: action.payload.length,
//         following: action.payload
//       };
//     default:
//       return state;
//   }
// };

export default loginReducer;
