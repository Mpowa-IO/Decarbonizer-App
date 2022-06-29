import axios from "axios";
import { REACT_APP_BASE_URL } from "../../env";

const Api = axios.create({
  baseURL: `${REACT_APP_BASE_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

Api.interceptors.request.use(function (config) {
  const token = "dadad";
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  config.headers["Content-Type"] = "application/json";

  return config;
});

Api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // toast.error(error?.response?.data?.message);
    if (error?.response?.status === 401 || error?.response?.status === 500) {
    }
    return Promise.reject(error);
  }
);

export default Api;
