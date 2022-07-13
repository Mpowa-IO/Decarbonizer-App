import { Alert } from "react-native";
import axios from "axios";
import { checkNetworkConnction } from "../checkNetwork";
import { strings } from "../../components/strings";
import { REACT_APP_BASE_URL } from "../../../env";

export async function signupApi(data) {
  console.log("user for signup", data);

  const conectionStatus = await checkNetworkConnction();
  if (conectionStatus === true) {
    return axios
      .post(`${REACT_APP_BASE_URL}/auth/credentials/register`, data, {
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
