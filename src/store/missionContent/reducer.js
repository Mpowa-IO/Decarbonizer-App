import {
  GET_MISSION_CONTENT,
  GET_MISSION_CONTENT_FAILUIRE,
  GET_MISSION_CONTENT_SUCCESS,
} from "./actionType";

const initailState = {
  mission: {},
  mission_loading: false,
  error: "",
};

export const missionContent = (state = initailState, action) => {
  switch (action.type) {
    case GET_MISSION_CONTENT:
      return {
        ...state,
        mission_loading: true,
      };

    case GET_MISSION_CONTENT_SUCCESS:
      return {
        ...state,
        mission_loading: false,
        mission: action.payload,
      };

    case GET_MISSION_CONTENT_FAILUIRE:
      return {
        ...state,
        mission_loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
