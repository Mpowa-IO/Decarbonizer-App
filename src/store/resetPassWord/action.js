import {
  RESET_PASSWORD,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_STATE,
  RESET_PASSWORD_SUCCESS,
} from "./actionType";

export const resetPassWord = (payload) => ({ type: RESET_PASSWORD, payload });
export const resetPassWordSuccess = (payload) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload,
});
export const resetPassWordFail = (payload) => ({
  type: RESET_PASSWORD_FAIL,
  payload,
});

export const resetPassWordState = () => ({ type: RESET_PASSWORD_STATE });
