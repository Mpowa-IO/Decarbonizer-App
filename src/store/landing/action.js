import {
  GET_LANDING_DATA,
  GET_LANDING_DATA_FAILURE,
  GET_LANDING_DATA_SUCCESS,
} from "./actionType";

export const getLandingData = () => ({ type: GET_LANDING_DATA });
export const getLandingDataSuccess = (payload) => ({
  type: GET_LANDING_DATA_SUCCESS,
  payload,
});

export const getLandingDataFail = (payload) => ({
  type: GET_LANDING_DATA_FAILURE,
  payload,
});
