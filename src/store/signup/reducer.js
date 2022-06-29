import {
  POST_SIGN_UP,
  POST_SIGN_UP_FAILURE,
  POST_SIGN_UP_SUCCESS,
  RESET_SIGNUP_STATE,
  SAVE_SIGN_UP,
} from "./actionTypes";

const initialState = {
  success_message: "",
  signUp_loading: false,
  error: "",
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGN_UP:
      return {
        ...state,
        signUp_loading: true,
      };
    case POST_SIGN_UP_SUCCESS:
      console.log("payload  for singup success", action.payload);

      return {
        ...state,
        success_message: action.payload.message,
        signUp_loading: false,
      };
    case POST_SIGN_UP_FAILURE:
      console.log("payload  for singup fail", action.payload);
      return {
        ...state,
        error: action.payload,
        signUp_loading: false,
      };
    case SAVE_SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    case RESET_SIGNUP_STATE:
      return {
        ...state,
        success_message: "",
        signUp_loading: false,
        error: "",
      };
    default:
      return state;
  }
};
