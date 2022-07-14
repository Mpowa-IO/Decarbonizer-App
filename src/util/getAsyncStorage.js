import AsyncStorage from "@react-native-async-storage/async-storage";
export async function getAccessToken() {
  const signInData = await AsyncStorage.getItem("@AccessToken");
  return signInData;
}

export async function clearAsyncStorage() {
  console.log("Inside clear async storage function");
  // await AsyncStorage.clear();
  const keys = ["@AccessToken"];
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (e) {
    // remove error
  }
}
