import {
  GET_HOW_IT_WORK,
  GET_HOW_IT_WORK_FAILUIRE,
  GET_HOW_IT_WORK_SUCCESS,
} from "./actionType";

const initailState = {
  howItWork: {},
  how_It_Work_loading: false,
  error: "",
};

const howItWorkReducer = (state = initailState, action) => {
  switch (action.type) {
    case GET_HOW_IT_WORK:
      return {
        ...state,
        how_It_Work_loading: true,
      };
    case GET_HOW_IT_WORK_SUCCESS:
      return {
        ...state,
        how_It_Work_loading: false,
        howItWork: action.payload,
      };
    case GET_HOW_IT_WORK_FAILUIRE:
      return {
        ...state,
        how_It_Work_loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default howItWorkReducer;
