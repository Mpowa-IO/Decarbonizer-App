import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import VirtualKeyboard from "react-native-virtual-keyboard";
import React, { useState } from "react";
import { height, width } from "../../services/dimensions";
import LinearGradient from "react-native-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";
import Images from "../../assets/images";
import Dropdown from "./Dropdown";

export default function NumKey({ navigation }) {
  const [selected, setSelected] = useState(undefined);
  const data = [
    { label: "Visa Ending 3140", value: "1", route: "PaymentProcced" },
    { label: "Mastercard Ending 5469", value: "2", route: "PaymentProcced" },
    { label: "AMEX Ending 2578", value: "3", route: "PaymentProcced" },
    { label: "Add New Payment Method", value: "4", route: "PaymentMethod" },
    { label: "Five", value: "5", route: "PaymentProcced" },
  ];
  const [newValue, setValueNew] = useState("");
  const [routeNew, setRouteNew] = useState("");

  const [cal, setCal] = useState("0");

  const changeText = (newText) => {
    setCal(newText);
  };

  return (
    <View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 48,
            fontFamily: "Alata-Regular",
            textAlign: "center",
          }}
        >
          ${cal}
        </Text>
      </View>
      <View
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 24,
          marginTop: 10,
        }}
      >
        <LinearGradient
          colors={["#1B1B1B", "#323232"]}
          style={{ borderRadius: 24 }}
        >
          <Dropdown
            label="Select Item"
            data={data}
            onSelect={setSelected}
            setValueNew={setValueNew}
            setRouteNew={setRouteNew}
          />
        </LinearGradient>
      </View>

      <View style={{ zIndex: -1 }}>
        <VirtualKeyboard
          color="white"
          pressMode="string"
          onPress={(val) => changeText(val)}
          decimal={"."}
          color="#348DCF"
          cellStyle={{ height: height * 0.1 }}
        />
      </View>
      <View
        style={{
          marginLeft: 40,
          marginRight: 40,
          marginTop: 10,
          borderRadius: 100,
        }}
      >
        <ImageBackground
          source={Images.BUTTON_BG}
          style={{ borderRadius: 10 }}
          resizeMode={"contain"}
        >
          <TouchableOpacity
            style={{
              height: height * 0.1,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            }}
            onPress={() =>
              navigation.navigate(routeNew ? routeNew : "PaymentProcced")
            }
          >
            <Text
              style={{
                color: "#A8C634",
                fontFamily: "Alata-Regular",
                fontSize: 20,
                marginTop: -10,
              }}
            >
              {newValue ? newValue : "Confirm amount"}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
}
