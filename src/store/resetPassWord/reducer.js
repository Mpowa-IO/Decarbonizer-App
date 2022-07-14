import {
  RESET_PASSWORD,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS,
} from "./actionType";

const initialState = {
  reset_password_message: "",
  reset_password_error: "",
  reset_password_loader: false,
};

export const resetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        reset_password_loader: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        reset_password_message: action.payload,
        reset_password_loader: false,
      };
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        reset_password_loader: false,
        reset_password_error: action.payload,
      };
    default:
      return state;
  }
};
