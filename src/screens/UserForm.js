import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Stepper from "react-native-stepper-ui";
import UserFormStep from "../components/UserForm/UserFormStep";

const UserForm = () => {
  return (
    <View style={{ backgroundColor: "#181818", flex: 1 }}>
      <UserFormStep />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({});
