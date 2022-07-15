import {
  POST_SIGN_IN,
  POST_SIGN_IN_FAILUIRE,
  POST_SIGN_IN_SUCCESS,
  SET_TOKEN,
} from "./actionType";

export const postSignIn = (payload, callBack) => {
  return {
    type: POST_SIGN_IN,
    payload,
    callBack,
  };
};

export const postSignInSuccess = (payload) => {
  return {
    type: POST_SIGN_IN_SUCCESS,
    payload,
  };
};

export const postSignInFailure = (payload) => {
  return {
    type: POST_SIGN_IN_FAILUIRE,
    payload,
  };
};

export const setToken = (payload) => ({ type: SET_TOKEN, payload });
