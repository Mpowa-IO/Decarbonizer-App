import {
  GET_LANDING_DATA,
  GET_LANDING_DATA_FAILURE,
  GET_LANDING_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  landing_data: {},
  loading_data_loader: false,
  error: "",
};

export const landingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LANDING_DATA:
      return {
        ...state,
        loading_data_loader: true,
      };

    case GET_LANDING_DATA_SUCCESS:
      return {
        ...state,
        landing_data: action.payload,
        loading_data_loader: false,
      };
    case GET_LANDING_DATA_FAILURE:
      return {
        ...state,
        landing_data: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
