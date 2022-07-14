import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_RESET_STATE,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
} from "./actionType";

export const forGotPassword = (payload) => ({
  type: FORGOT_PASSWORD_START,
  payload,
});

export const forGotPasswordSuccess = (payload) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forGotPasswordFailUre = (payload) => ({
  type: FORGOT_PASSWORD_FAILURE,
  payload,
});

export const forGotPassWordResetState = () => ({
  type: FORGOT_PASSWORD_RESET_STATE,
});
