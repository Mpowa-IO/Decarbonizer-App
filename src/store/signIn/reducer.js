import {
  POST_SIGN_IN,
  POST_SIGN_IN_FAILUIRE,
  POST_SIGN_IN_SUCCESS,
  SET_TOKEN,
} from "./actionType";

const initailState = {
  userTokenInfo: {},
  signInLoading: false,
  token: null,
};

export const signInReducer = (state = initailState, action) => {
  switch (action.type) {
    case POST_SIGN_IN:
      return {
        ...state,
        signInLoading: true,
      };
    case POST_SIGN_IN_SUCCESS:
      return {
        ...state,
        signInLoading: false,
        userTokenInfo: action.payload,
      };
    case POST_SIGN_IN_FAILUIRE:
      return {
        ...state,
        signInLoading: false,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};
