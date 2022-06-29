import {
  GET_MISSION_CONTENT,
  GET_MISSION_CONTENT_SUCCESS,
  GET_MISSION_CONTENT_FAILUIRE,
} from "./actionType";

export const getMissionContent = () => ({ type: GET_MISSION_CONTENT });
export const getMissionContetSuccess = (payload) => ({
  type: GET_MISSION_CONTENT_SUCCESS,
  payload,
});
export const getMissionContentFailure = (payload) => ({
  type: GET_MISSION_CONTENT_FAILUIRE,
  payload,
});
