import {
  RESET_STATE,
  SET_ACCOUNT_DETAILS,
  SET_CARBON,
  SET_COMPANY_DETAILS,
  SET_COMPANY_SIZE,
  SET_EMAIL,
  SET_NAMES,
} from "./actionTypes";

export const setEmail = (payload) => {
  return {
    type: SET_EMAIL,
    payload,
  };
};

export const setAccount = (payload) => {
  return {
    type: SET_ACCOUNT_DETAILS,
    payload,
  };
};

export const setNames = (payload) => {
  console.log("set names payload", payload);
  return {
    type: SET_NAMES,
    payload,
  };
};

export const setCompanyDetails = (payload) => {
  return {
    type: SET_COMPANY_DETAILS,
    payload,
  };
};

export const setCompanySize = (payload) => {
  return {
    type: SET_COMPANY_SIZE,
    payload,
  };
};

export const setCarbon = (payload) => {
  return {
    type: SET_CARBON,
    payload,
  };
};

export const resetForm = () => ({ type: RESET_STATE });
