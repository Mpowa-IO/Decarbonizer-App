import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Images from "../../assets/images";
import LinearGradient from "react-native-linear-gradient";

const token = () => {
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        // backgroundColor: "red",
        paddingTop: 40,
        paddingBottom: 40,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ marginRight: 20 }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Alata-Regular",
              width: 126,
              textAlign: "center",
            }}
          >
            Available Token Value
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Image source={Images.TOKEN_BIG} />
          </View>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Alata-Regular",
              marginLeft: 20,
            }}
          >
            340
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          // backgroundColor: "yellow",
          width: "100%",
          paddingBottom: 10,
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Alata-Regular",
              color: "#fff",
              fontSize: 18,
            }}
          >
            Project Fund
          </Text>
          <Text
            style={{
              fontFamily: "Alata-Regular",
              color: "#fff",
              fontSize: 12,
              textAlign: "center",
            }}
          >
            (minimum 150)
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            height: 43,
            borderRadius: 24,
            flexDirection: "row",
            width: 150,
            marginLeft: 20,
          }}
        >
          <View style={{ marginTop: 5 }}>
            <Image source={Images.COIN_LOGO} />
          </View>
          <View>
            <View>
              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=""
                keyboardType="numeric"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{ width: 150, marginLeft: 150 }}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#1B1B1B", "#323232"]}
            style={{
              // paddingTop: 10,
              // paddingLeft: 20,
              // paddingBottom: 10,
              // paddingRight: 20,
              borderRadius: 24,
              height: 43,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 13,
                fontFamily: "Alata-Regular",
                color: "#A8C634",
                textAlign: "center",
              }}
            >
              add to fund
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default token;

const styles = StyleSheet.create({});
