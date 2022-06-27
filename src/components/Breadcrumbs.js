import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Images from "../assets/images";
import Container from "./container";

const Breadcrumbs = (props) => {
  const { BreadText, onPress, Leftstyle } = props;
  return (
    <View
      style={[
        styles.BreadMain,
        {
          flexDirection: "row",
          // backgroundColor: 'green',
          height: 92,
        },
      ]}
    >
      <View style={[styles.BackBtn, { left: Leftstyle }]}>
        <Pressable onPress={onPress} style={styles.BackMain}>
          <Image source={Images.BACK} style={styles.back} />
        </Pressable>
      </View>
      <View
        style={[
          styles.MainBreadText,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text style={[styles.TextBread]}>{BreadText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  BreadMain: {
    backgroundColor: "#201E21",
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 40,
    shadowColor: "#000000",
    position: "relative",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,
  },
  TextBread: {
    color: "#A8C634",
    fontSize: 28,
    fontFamily: "Alata-Regular",
    // marginTop: -5,
  },
  MainBreadText: {
    marginLeft: 10,
    alignItems: "center",
    width: "100%",
  },
  BackBtn: {
    alignItems: "center",
    position: "absolute",
    left: 20,
    top: 23,
    zIndex: 99,
    // backgroundColor: 'red',
    height: "100%",
  },
  BackMain: {
    width: 50,
    alignItems: "center",
    height: 50,
    justifyContent: "center",
  },
});
export default Breadcrumbs;
