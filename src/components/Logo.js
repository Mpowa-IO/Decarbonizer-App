import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/images";

export default function Logo({ navigation, isArrow }) {
  return (
    <View style={styles.logoContainer}>
      {isArrow && (
        <TouchableOpacity
          style={styles.ButtonCher}
          onPress={() => navigation.goBack()}
        >
          <Image source={Images.LEFT_ARROW} style={styles.logo} />
        </TouchableOpacity>
      )}
      <View>
        <Image source={Images.HEADER_LOGO} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: "#181818",
    alignItems: "center",
    padding: 20,
    position: "relative",
  },
  ButtonCher: {
    position: "absolute",
    left: 10,
    top: 30,
  },
});
