import {
  POST_SIGN_UP,
  POST_SIGN_UP_FAILURE,
  POST_SIGN_UP_SUCCESS,
  SAVE_SIGN_UP,
} from "./actionTypes";

export const postSignup = (payload, callBack) => {
  console.log("in action post signup", payload);
  return {
    type: POST_SIGN_UP,
    payload,
    callBack,
  };
};

export const postSignupSuccess = (payload) => ({
  type: POST_SIGN_UP_SUCCESS,
  payload,
});

export const postSignupFailure = (payload) => ({
  type: POST_SIGN_UP_FAILURE,
  payload,
});

export const saveSignupSuccess = (payload) => ({ type: SAVE_SIGN_UP, payload });
