import React from "react";
import { View, Text } from "react-native";
import { height } from "../../services/dimensions";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import UserFormDetails from "./UserFormDetails";
import UserFormTop from "./UserFormTop";

const UserFormStep = () => {
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
      <View style={{ marginTop: height * 0.05 }}>
        <UserFormTop title={"User registration step 1"} />
      </View>
      <View>
        <UserFormDetails title={"Please enter user information below."} />
      </View>
      <View style={{ marginTop: height * 0.03 }}>
        {/* <Step1 /> */}
        {/* <Step2 /> */}
        <Step3 />
      </View>
    </View>
  );
};

export default UserFormStep;
