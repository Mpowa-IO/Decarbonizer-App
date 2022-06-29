import { Alert } from "react-native";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";
import { getAPIFunction } from "./commonAPI/getApiFunction";

export const missionContentApi = async (token) => {
  const conectionStatus = await checkNetworkConnction();

  if (conectionStatus) {
    const API = "content/info/mission";
    return getAPIFunction(API, token).then((res) => res);
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
};
