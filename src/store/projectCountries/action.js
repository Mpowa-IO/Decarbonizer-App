import {
  GET_PROJECT_COUNTRIES,
  GET_PROJECT_COUNTRIES_FAILURE,
  GET_PROJECT_COUNTRIES_SUCCESS,
} from "./actionType";

export const getProjectCountries = () => ({ type: GET_PROJECT_COUNTRIES });
export const getProjectCountriesSuccess = (payload) => ({
  type: GET_PROJECT_COUNTRIES_SUCCESS,
  payload,
});
export const getPorjectCountriesFailure = (payload) => ({
  type: GET_PROJECT_COUNTRIES_FAILURE,
  payload,
});
