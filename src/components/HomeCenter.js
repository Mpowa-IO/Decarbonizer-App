import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const HomeCenter = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(26, 26, 26, 0.9)",
          padding: 15,
          width: "33.33%",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "#fff",
                fontSize: 15,
                fontFamily: "Alata-Regular",
              }}
            >
              You {"\n"}have{"\n"}funded
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "rgba(168, 198, 52, 1)",
                fontSize: 30,
                fontFamily: "Alata-Regular",
              }}
            >
              4
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 19 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "Alata-Regular",
              textTransform: "uppercase",
            }}
          >
            Projects
          </Text>
        </View>
      </View>
      <Pressable
        style={{
          backgroundColor: "rgba(46, 46, 46, 1)",
          padding: 15,
          width: "33.33%",
          opacity: 0.9,
          justifyContent: "center",
          alignContent: "center",
        }}
        onPress={() => navigation.navigate("UserBottom")}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 30,
                fontFamily: "Alata-Regular",
                textAlign: "center",
                marginTop: 5,
                position: "absolute",
                top: -57,
              }}
            >
              9
            </Text>
          </View>
        </View>
        <View style={{ position: "absolute", bottom: 15, left: 10 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontFamily: "Alata-Regular",
              textTransform: "uppercase",
            }}
          >
            hEROeS
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: "#fff",
              fontFamily: "Alata-Regular",
            }}
          >
            What’s a hero?
          </Text>
        </View>
      </Pressable>
      <View
        style={{
          backgroundColor: "rgba(26, 26, 26, 0.9)",
          paddingLeft: 15,
          paddingBottom: 15,
          paddingBottom: 15,
          width: "33.33%",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 12,
              textAlign: "right",
              paddingRight: 5,
            }}
          >
            Potential 3579t CO2 offset pa
          </Text>
          <Text
            style={{
              color: "rgba(168, 198, 52, 1)",
              fontSize: 30,
              fontFamily: "Alata-Regular",
              marginTop: -10,
            }}
          >
            14
          </Text>
          <Text
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontFamily: "Alata-Regular",
              fontSize: 16,
            }}
          >
            Projects in INCUBATION
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeCenter;

const styles = StyleSheet.create({});
