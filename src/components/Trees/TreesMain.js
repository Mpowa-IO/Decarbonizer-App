import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Images from "../../assets/images";
import { height, width } from "../../services/dimensions";
import { useSelector } from "react-redux";

const TreesMain = ({ navigation }) => {
  const { current_project } = useSelector((state) => state.singleProject);

  return (
    <View style={{ backgroundColor: "#000", position: "relative" }}>
      <View>
        {current_project?.hero?.image_url ? (
          <Image
            style={{ height: height * 0.5 }}
            source={{
              uri: current_project?.hero?.image_url,
            }}
          />
        ) : // <Image source={Images.TREES_MAIN} />
        null}
      </View>
      <View
        style={{
          position: "absolute",
          top: height * 0.05,
          padding: 15,
          right: -15,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 24,
            fontFamily: "Alata-Regular",
            width: width * 0.4,
          }}
        >
          Meet {current_project?.hero?.name} Our Hero for the{" "}
          {current_project?.name}
          project
        </Text>
      </View>
      <View style={{ position: "relative", height: height * 0.32 }}>
        <View>
          <Image source={Images.BOTTOM_TREES} style={{ height: "100%" }} />
        </View>
        <View
          style={{
            padding: 15,
            position: "absolute",
            backgroundColor: "rgba(26, 26, 26, 0.53)",
            width: "100%",
            height: "100%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontFamily: "Alata-Regular",
              fontWeight: "400",
            }}
          >
            CHOOSE A PLAN FROM $4.99/mo AND START YOUR IMPACT TODAY
          </Text>
          <Text
            style={{ fontSize: 14, color: "#fff", fontFamily: "Alata-Regular" }}
          >
            Join the growing crowd of people making a measurable, traceable,
            transparent impact in climate-positive giving and investing.
          </Text>
          <View style={{ marginTop: height * 0.03 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#A8C634",
                borderRadius: 6,
                width: width * 0.4,
                padding: 10,
              }}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Exploreplans")}
            >
              <Text
                style={{
                  color: "#2E2E2E",
                  fontFamily: "Alata-Regular",
                  textAlign: "center",
                }}
              >
                Explore plans
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TreesMain;
