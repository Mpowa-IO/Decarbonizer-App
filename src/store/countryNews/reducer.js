import {
  GET_COUNTRY_NEWS,
  GET_COUNTRY_NEWS_FAILURE,
  GET_COUNTRY_NEWS_SUCCESS,
} from "./actionType";

const initialState = {
  country_news: [],
  country_news_loading: false,
  error: "",
};

export const countryNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_NEWS:
      return {
        ...state,
        country_news_loading: true,
        country_news: [],
        error: "",
      };
    case GET_COUNTRY_NEWS_SUCCESS:
      return {
        ...state,
        country_news_loading: false,
        country_news: action.payload,
      };
    case GET_COUNTRY_NEWS_FAILURE:
      return {
        ...state,
        country_news: [],
        country_news_loading: false,
      };
    default:
      return state;
  }
};
