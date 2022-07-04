import React from "react";
import { View, Text } from "react-native";
import { height } from "../../services/dimensions";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import UserFormDetails from "./UserFormDetails";
import UserFormTop from "./UserFormTop";

const UserFormStep = (props) => {
  const { navigation } = props;
  console.log(props, "this is");
  const data = [
    {
      topTitle: "User registration step 1",
      userDetails: "Please enter user information below.",
      componet: <Step1 />,
    },
    {
      topTitle: "User registration step 2",
      userDetails: "Please enter user information below.",
      componet: <Step2 />,
    },
    {
      topTitle: "User registration step 2",
      userDetails: "Please enter user information below.",
      componet: <Step3 />,
    },
  ];

  return (
    <View>
      <View>
        <Step1 onPress={() => navigation.navigate("Step2")} {...props} />
      </View>
    </View>
  );
};

export default UserFormStep;
