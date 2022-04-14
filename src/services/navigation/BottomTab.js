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
import WorkIcon from "../../assets/BottomTab/Work.svg";
import WorkActive from "../../assets/BottomTab/Active-work.svg";
import CategoryIcon from "../../assets/BottomTab/Category.svg";
import CategoryActive from "../../assets/BottomTab/Active-Category.svg";
import WalletIcon from "../../assets/BottomTab/Wallet.svg";
import WalletActive from "../../assets/BottomTab/Active-Wallet.svg";
import More from "../../assets/BottomTab/More.svg";
import MoreActive from "../../assets/BottomTab/Active-More.svg";

const Tab = createBottomTabNavigator();

function MyTabs() {
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
        name="Home"
        component={Home}
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
        name="FundingStage"
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
              {focused ? <WorkActive /> : <WorkIcon />}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="YourDashBoard"
        component={YourDashBoard}
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
              {focused ? <CategoryActive /> : <CategoryIcon />}
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
              {focused ? <WalletActive /> : <WalletIcon />}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ExtraMenu"
        component={ExtraMenu}
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

export default MyTabs;
