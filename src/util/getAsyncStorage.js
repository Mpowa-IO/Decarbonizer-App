import AsyncStorage from "@react-native-async-storage/async-storage";
export async function getAccessToken() {
  const signInData = await AsyncStorage.getItem("@AccessToken");
  return signInData;
}
