import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import Images from "../assets/images";
import { height } from "../services/dimensions";

const TextInputField = (props) => {
  const {
    Label,
    onChangeText,
    onBlur,
    TextValue,
    placeholder,
    placeholderTextColor,
    keyboardType,
    style,
    color,
    isLabel,
    isPassword,
    isInput,
    isDropDown,
  } = props;

  return (
    <View style={style}>
      {isLabel && (
        <View>
          <Text style={styles.LabelText}>{Label}</Text>
        </View>
      )}
      <View style={{ position: "relative" }}>
        {isInput && (
          <TextInput
            onChangeText={onChangeText}
            onBlur={onBlur}
            value={TextValue}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            style={[styles.TextInputStyle, { color: color }]}
          />
        )}
        {isPassword && (
          <TouchableOpacity style={styles.EyeButton}>
            <Image source={Images.EYE} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInputStyle: {
    fontSize: 18,
    fontWeight: "400",
    fontFamily: "Alata-Regular",
    backgroundColor: "#253858",
    borderRadius: 2,
    paddingLeft: 20,
    // height: height * 0.05,
    // height: height * 0.05,
  },
  LabelText: {
    color: "#FFFFFF",
    fontFamily: "Alata-Regular",
    marginBottom: 5,
  },
  EyeButton: {
    position: "absolute",
    right: 0,
    top: 5,
  },
});
export default TextInputField;
