import {
  GET_DASHBOARD,
  GET_DASHBOARD_FAILURE,
  GET_DASHBOARD_SUCCESS,
} from "./actionType";

const initialState = {
  dashBoard: {},
  dashBoardLoading: false,
  error: "",
};

const dashBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD:
      return {
        ...state,
        dashBoardLoading: true,
      };
    case GET_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashBoard: action.payload,
      };
    case GET_DASHBOARD_FAILURE:
      return {
        ...state,
        dashBoardLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default dashBoardReducer;
