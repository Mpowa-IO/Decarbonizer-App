import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS,
} from "./actionType";

export const getDashBoard = () => ({ type: GET_DASHBOARD });
export const getDashBoardSuccess = (payload) => ({
  type: GET_DASHBOARD_SUCCESS,
  payload,
});

export const getDashBoardFailure = (payload) => ({
  type: GET_DASHBOARD_FAILURE,
  payload,
});
