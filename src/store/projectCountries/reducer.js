import {
  GET_PROJECT_COUNTRIES,
  GET_PROJECT_COUNTRIES_FAILURE,
  GET_PROJECT_COUNTRIES_SUCCESS,
} from "./actionType";

const initialState = {
  project_countries: [],
  project_error: "",
  project_loading: false,
};

const projectReucer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECT_COUNTRIES:
      return {
        ...state,
        project_loading: true,
      };
    case GET_PROJECT_COUNTRIES_SUCCESS:
      return {
        ...state,
        project_countries: action.payload,
        project_loading: false,
      };
    case GET_PROJECT_COUNTRIES_FAILURE:
      return {
        ...state,
        project_error: action.payload,
        project_loading: false,
      };
    default:
      return state;
  }
};
export default projectReucer;
