import {
  GET_SINGLE_PROJECT,
  GET_SINGLE_PROJECT_FAILURE,
  GET_SINGLE_PROJECT_SUCCESS,
} from "./actionType";

export const getSingleProject = (payload) => ({
  type: GET_SINGLE_PROJECT,
  payload,
});

export const getSingleProjectSuccess = (payload) => ({
  type: GET_SINGLE_PROJECT_SUCCESS,
  payload,
});

export const getSingleProjectFailure = (payload) => ({
  type: GET_SINGLE_PROJECT_FAILURE,
  payload,
});
