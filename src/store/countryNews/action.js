import {
  GET_COUNTRY_NEWS,
  GET_COUNTRY_NEWS_FAILURE,
  GET_COUNTRY_NEWS_SUCCESS,
} from "./actionType";

export const getCountryNews = (id) => ({ type: GET_COUNTRY_NEWS, id });
export const getCountryNewsSuccess = (payload) => ({
  type: GET_COUNTRY_NEWS_SUCCESS,
  payload,
});

export const getCountryNewsFail = (payload) => ({
  type: GET_COUNTRY_NEWS_FAILURE,
  payload,
});
