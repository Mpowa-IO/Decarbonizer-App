import { GET_FAQ, GET_FAQ_FAILURE, GET_FAQ_SUCCESS } from "./actionType";

export const getFaq = () => ({ type: GET_FAQ });
export const getFaqSuccess = (payload) => ({ type: GET_FAQ_SUCCESS, payload });
export const getFaqFailure = (payload) => ({ type: GET_FAQ_FAILURE, payload });
