import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import Images from "../assets/images";
import { height } from "../services/dimensions";

export default function Logo({ navigation, isArrow, backgroundColor }) {
  return (
    <View
      style={[
        styles.logoContainer,
        { marginTop: Platform.OS === "ios" ? height * 0.04 : null },
        { backgroundColor: backgroundColor },
      ]}
    >
      {isArrow && (
        <TouchableOpacity
          style={styles.ButtonCher}
          onPress={() => navigation.goBack()}
        >
          <Image source={Images.LEFT_ARROW} style={styles.logo} />
        </TouchableOpacity>
      )}
      <View
        style={{
          marginLeft: 20,
        }}
      >
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
    left: 8,
    width: 50,
    height: 50,
    top: 30,
    // backgroundColor: "red",
  },
});
