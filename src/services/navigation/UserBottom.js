import * as React from "react";
import { Text, View, Image } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import SignIn from "../../screens/SignIn";

import Images from "../../assets/images";
import ExtraMenu from "../../screens/ExtraMenu";
import FundingStage from "../../screens/FundingStage";
import Wallet from "../../screens/Wallet";
import YourDashBoard from "../../screens/YourDashboard";

import HomeIcon from "../../assets/BottomTab/Home.svg";
import HomeActive from "../../assets/BottomTab/Active-home.svg";
import ScannerIcon from "../../assets/BottomTab/ScannerIcon.svg";
import ScannerIconActive from "../../assets/BottomTab/ScannerIconActive.svg";
import AddUserIcon from "../../assets/BottomTab/AddUser.svg";
import AddUserIconActive from "../../assets/BottomTab/AddUserIconActive.svg";
import WalletIcon from "../../assets/BottomTab/Wallet.svg";
import WalletActive from "../../assets/BottomTab/Active-Wallet.svg";
import More from "../../assets/BottomTab/More.svg";
import MoreActive from "../../assets/BottomTab/Active-More.svg";
import UserHome from "../../screens/UserHome";
import UserForm from "../../screens/UserForm";

const Tab = createBottomTabNavigator();

function UserBottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#7700EC",

        tabBarStyle: {
          paddingTop: 30,
          paddingBottom: Platform.OS === "android" ? 10 : 20,
          height: Platform.OS === "android" ? 80 : 120,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#000",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="UserHome"
        component={UserHome}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
              }}
            >
              {focused ? <HomeActive /> : <HomeIcon />}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="UserForm"
        component={UserForm}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
              }}
            >
              {focused ? <ScannerIconActive /> : <ScannerIcon />}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="AddUserIcon"
        component={FundingStage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
              }}
            >
              {focused ? <AddUserIconActive /> : <AddUserIcon />}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="YouCarbon"
        component={Wallet}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 20,
              }}
            >
              {focused ? <MoreActive /> : <More />}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default UserBottom;
