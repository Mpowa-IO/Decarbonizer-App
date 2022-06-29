import {
  GET_HOW_IT_WORK,
  GET_HOW_IT_WORK_FAILUIRE,
  GET_HOW_IT_WORK_SUCCESS,
} from "./actionType";

export const getHowDecarbonizerWrok = () => ({ type: GET_HOW_IT_WORK });

export const getHowItWrokSuccess = (payload) => ({
  type: GET_HOW_IT_WORK_SUCCESS,
  payload,
});

export const getHowItWrokFailuire = (payload) => ({
  type: GET_HOW_IT_WORK_FAILUIRE,
  payload,
});
