import axios from "axios";
// import { REACT_APP_BASE_URL } from "../../../env";
export async function getAPIFunction(API, headerToken, data) {
  // console.log("in common api function", API, headerToken, data);
  let params = params == undefined ? null : data;
  // console.log("in common api function", API, params);
  // return await axios.get(
  //   `${REACT_APP_BASE_URL}/${API}`,
  //   {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${headerToken}`,
  //     },
  //   },
  //   params
  // );
}
