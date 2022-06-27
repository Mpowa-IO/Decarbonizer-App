import { Alert } from "react-native";
import axios from "axios";
import { checkNetworkConnction } from "../checkNetwork";
// import { REACT_APP_BASE_URL } from "../../../env";
import { strings } from "../../components/strings";

export async function signupApi(data) {
  const conectionStatus = await checkNetworkConnction();
  if (conectionStatus === true) {
    // return axios
    //   .post(`${REACT_APP_BASE_URL}/registration`, data)
    //   .then((res) => {
    //     return res;
    //   });
  } else {
    Alert.alert(strings.InternetIssue, strings.ReconnectToTheNetwork);
  }
}
