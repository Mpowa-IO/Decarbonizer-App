import axios from "axios";
import { Alert } from "react-native";
import { REACT_APP_BASE_URL } from "../../../env";
import { strings } from "../../components/strings";
import { checkNetworkConnction } from "../checkNetwork";

export async function signInApi(data) {
  const conectionStatus = await checkNetworkConnction();
  if (conectionStatus === true) {
    return axios
      .post(`${REACT_APP_BASE_URL}/auth/credentials/login`, data, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authkey: "ac56a8d2ca1fa26b",
        },
      })
      .then((res) => {
        return res;
      });
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
}
