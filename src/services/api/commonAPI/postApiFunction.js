import axios from "axios";
// import { REACT_APP_BASE_URL } from "../../../env";
REACT_APP_BASE_URL;
export async function postAPIFunction(API, headerToken, data) {
  let params = data == undefined ? null : data;
  // console.log("in common api function", API, params);
  // return await axios.post(`${REACT_APP_BASE_URL}/${API}`, params, {
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${headerToken}`,
  //   },
  // });
}
