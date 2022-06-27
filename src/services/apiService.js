import axios from "axios";

const options = {
  headers: { Accept: "application/json" },
};

export async function getDataService(APIURL) {
  try {
    const response = await axios.get(APIURL, options);
    console.log("resnse in post data api func", response);
    return response;
  } catch (error) {
    console.log("error in get data service", error);
    return error;
  }
}

export async function postDataService(APIURL) {
  try {
    const response = await axios.post(APIURL, options);
    console.log("resnse in post data api func", response);
    return response;
  } catch (error) {
    console.log("error in post data service", error);
    return error;
  }
}
