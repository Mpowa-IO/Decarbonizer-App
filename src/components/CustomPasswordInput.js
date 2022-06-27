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

const CustomPasswordInput = (props) => {
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
    defaultValue,
    isPassword,
    isInput,
    hidePassword,
    togglePassword,
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
            defaultValue={defaultValue}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            secureTextEntry={hidePassword}
            style={[styles.TextInputStyle, { color: color }]}
          />
        )}
        {true && (
          <TouchableOpacity style={styles.EyeButton} onPress={togglePassword}>
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
export default CustomPasswordInput;
