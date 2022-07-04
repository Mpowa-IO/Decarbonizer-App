import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Images from "../../assets/images";
import { height, width } from "../../services/dimensions";

const UserFormTop = (props) => {
  const { title, isOne, isTwo, isThree, isFour, navigation } = props;

  console.log(props, "this is props top");

  return (
    <View
      style={{
        backgroundColor: "#201E21",
        height: height * 0.1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            left: width * 0.05,
            top: height * 0.01,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image source={Images.LEFT_ARROW_GREEN} />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              fontSize: 24,
              color: "#A8C634",
              fontFamily: "Alata-Regular",
            }}
          >
            {title}
          </Text>
        </View>
      </View>
      {isOne && (
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
            }}
          />
        </View>
      )}
      {isTwo && (
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
            }}
          />
        </View>
      )}
      {isThree && (
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#434343",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
        </View>
      )}
      {isFour && (
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
          <View
            style={{
              backgroundColor: "#A8C634",
              height: 10,
              width: 10,
              borderRadius: 100,
              marginRight: 2,
            }}
          />
        </View>
      )}
    </View>
  );
};

export default UserFormTop;
