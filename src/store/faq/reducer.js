import { GET_FAQ, GET_FAQ_FAILURE, GET_FAQ_SUCCESS } from "./actionType";

const initailState = {
  faqState: [],
  error: "",
  faq_loading: false,
};

export const faqReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_FAQ:
      return {
        ...state,
        faq_loading: true,
      };
    case GET_FAQ_SUCCESS:
      console.log("GET_FAQ_SUCCESS payload", action.payload);
      return {
        ...state,
        faqState: action.payload,
        faq_loading: false,
      };
    case GET_FAQ_FAILURE:
      return {
        ...state,
        error: action.payload,
        faq_loading: false,
      };

    default:
      return state;
  }
};
