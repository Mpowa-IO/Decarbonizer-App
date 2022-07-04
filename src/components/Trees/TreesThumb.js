import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import Images from "../../assets/images";
import { height, width } from "../../services/dimensions";

const TreesThumb = () => {
  const { current_project } = useSelector((state) => state.singleProject);

  return (
    <View style={{ position: "relative", height: height * 0.3 }}>
      <View>
        <Image source={Images.HOME_THUMB} style={{ height: "100%" }} />
      </View>
      <View
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.69)",
          width: width * 0.55,
          height: "100%",
          right: 0,
          padding: 15,
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            Country :{" "}
            <Text style={{ color: "#A8C634" }}>
              {current_project?.country?.name}
            </Text>
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            Project type:{" "}
            <Text style={{ color: "#A8C634" }}>
              {current_project?.type?.name}
            </Text>
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            Location:{" "}
            <Text style={{ color: "#A8C634" }}>
              {current_project?.location_name}
            </Text>
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            Hero:{" "}
            <Text style={{ color: "#A8C634" }}>
              {current_project?.hero?.name}
            </Text>
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            Households impact:{" "}
            <Text style={{ color: "#A8C634" }}>
              {current_project?.impact_household}
            </Text>
          </Text>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              marginBottom: 1,
            }}
          >
            People impact:{" "}
            <Text style={{ color: "#A8C634" }}>
              {" "}
              {current_project?.impact_people}{" "}
            </Text>
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 2 }}>
          <View style={{ width: width * 0.25 }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "Alata-Regular",
                fontSize: 14,
              }}
            >
              CO2 tonnes offset pa.
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "#A8C634",
                fontFamily: "Alata-Regular",
                fontSize: 26,
              }}
            >
              {current_project?.co2_offset}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TreesThumb;

const styles = StyleSheet.create({});
