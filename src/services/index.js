import { signupApi } from "./api/signupApi";
import { getDataService, postDataService } from "./apiService";

export function ApiCall(requestData) {
  console.log("request data in api call", requestData);
  let data;
  const isGet = requestData.requestType == "get";
  if (isGet) {
    data = getDataService(requestData.URL, requestData.requestParams);
  } else {
    data = postDataService(requestData.URL, requestData.requestParams);
  }
  console.log("respone ddatain apic call", data);
  return data;
}

export { signupApi };
