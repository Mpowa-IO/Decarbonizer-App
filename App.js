import { View, Text } from "react-native";
import React from "react";
// navigation
import { navigationRef } from "./src/services/navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
// routes
import Routes, { SetRoutes } from "./src/routes/routes";
import MyTabs from "./src/services/navigation/BottomTab";
import Toast from "react-native-toast-message";

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <SetRoutes />
      {/* <MyTabs /> */}
      <Toast />
    </NavigationContainer>
  );
}

export default App;
