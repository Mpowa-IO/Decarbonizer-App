import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { getAPIFunction } from "./commonAPI/getApiFunction";

export const getFaqApi = async (token) => {
  const conectionStatus = await checkNetworkConnction();

  console.log("token in api function", token);
  console.log("conectionStatus", conectionStatus);
  const API = "content/faq";
  if (conectionStatus === true) {
    return getAPIFunction(API, token).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
};
