import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import LinearGradient from "react-native-linear-gradient";
import { height, width } from "../../services/dimensions";
import Plus from "../../assets/Plus.svg";

export default function CashCard({ navigation }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "USD $", value: "USD $" },
    { label: "AUSD $", value: "AUSD $" },
    { label: "GBP £", value: "GBP £" },
    { label: "YEN ¥", value: "YEN ¥" },
    { label: "EUR €", value: "EUR €" },
  ]);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        marginTop: height * 0.1,
      }}
    >
      <View style={{ width: width * 0.4 }}>
        <Text
          style={{
            fontSize: 36,
            color: "#fff",
            fontFamily: "Abel-Regular",
            paddingLeft: 30,
          }}
        >
          Cash
        </Text>
      </View>
      <View style={{ width: width * 0.6 }}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          //   end={{ x: 1, y: 0 }}
          colors={["#1B1B1B", "#323232"]}
          style={{ borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}
        >
          <View
            style={{
              height: height * 0.2,
              justifyContent: "center",
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                paddingRight: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("ConfirmAmount")}
              >
                <Text style={{ color: "#fff", fontSize: 20 }}>
                  <Plus />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text
                style={{
                  fontSize: 36,
                  fontFamily: "Abel-Regular",
                  color: "#fff",
                  marginLeft: 50,
                }}
              >
                $250
              </Text>
            </View>
            <View style={{ borderRadius: 10, alignItems: "flex-end" }}>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                containerStyle={{ width: 112, marginRight: 10 }}
                style={{
                  backgroundColor: "#fafafa",
                  borderRadius: 50,
                  borderTopStartRadius: 50,
                  borderTopEndRadius: 50,
                  borderBottomStartRadius: 50,
                  borderBottomEndRadius: 50,
                  borderWidth: 1,
                }}
                dropDownContainerStyle={{
                  borderRadius: 10,
                  width: 112,
                  marginTop: height * -0.065,
                  height: height * 0.15,
                  position: "absolute",
                  borderTopStartRadius: 20,
                  borderTopEndRadius: 20,
                  borderBottomStartRadius: 20,
                  borderBottomEndRadius: 20,
                }}
                textStyle={{
                  fontFamily: "Alata-Regular",
                  color: "#434343",
                }}
                arrowIconStyle={{
                  tintColor: "#000",
                }}
                placeholder="USD $"
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}
