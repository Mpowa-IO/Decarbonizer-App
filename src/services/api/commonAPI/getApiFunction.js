import axios from "axios";
import { REACT_APP_BASE_URL } from "../../../../env";
export async function getAPIFunction(API, headerToken, data) {
  console.log("in common api function", API, headerToken);
  let params = params == undefined ? null : data;
  // console.log("in common api function", API, params);
  return await axios.get(`${REACT_APP_BASE_URL}/${API}`, {
    headers: {
      accept: "application/json",
      authkey: "ac56a8d2ca1fa26b",
      Authorization: `Bearer ${headerToken}`,
    },
  });
}
