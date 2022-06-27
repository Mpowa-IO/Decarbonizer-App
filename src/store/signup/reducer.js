import {
  POST_SIGN_UP,
  POST_SIGN_UP_FAILURE,
  POST_SIGN_UP_SUCCESS,
  SAVE_SIGN_UP,
} from "./actionTypes";

const initialState = {
  user: {},
  error: "",
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_SIGN_UP:
      return {
        ...state,
      };
    case POST_SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case POST_SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SAVE_SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
