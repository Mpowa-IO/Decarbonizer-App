import {
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS,
} from "../dashboard/actionType";
import { GET_SINGLE_PROJECT, GET_SINGLE_PROJECT_SUCCESS } from "./actionType";

const initalState = {
  current_project: {},
  current_project_loading: false,
};

const singleProject = (state = initalState, action) => {
  switch (action.type) {
    case GET_SINGLE_PROJECT:
      return {
        ...state,
        current_project_loading: true,
      };
    case GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        current_project_loading: false,
        current_project: action.payload,
      };
    case GET_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        current_project: false,
      };
    default:
      return state;
  }
};
export default singleProject;
