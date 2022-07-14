import {
  FORGOT_PASSWORD_FAILURE,
  FORGOT_PASSWORD_RESET_STATE,
  FORGOT_PASSWORD_START,
  FORGOT_PASSWORD_SUCCESS,
} from "./actionType";

const initalState = {
  forgot_message: "",
  error: "",
  forgot_pass_loading: false,
};

export const forGotpassWordState = (state = initalState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_START:
      return {
        ...state,
        forgot_pass_loading: true,
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgot_message: action.payload,
        forgot_pass_loading: false,
      };

    case FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
        forgot_pass_loading: false,
        error: action.payload,
      };
    case FORGOT_PASSWORD_RESET_STATE:
      return {
        ...state,
        forgot_message: "",
        forgot_pass_loading: false,
        error: "",
      };
    default:
      return state;
  }
};
