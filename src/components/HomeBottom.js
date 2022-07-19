import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector } from "react-redux";
import Images from "../assets/images";
import { height, width } from "../services/dimensions";

const HomeBottom = ({ navigation }) => {
  const { landing_data } = useSelector((state) => state.landingReducer);
  const [enabled, setEnabled] = React.useState(true);

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{ height: "100%" }}
        onPress={() => navigation.navigate("HowDecarbonizerWorks")}
      >
        <View
          style={{
            position: "relative",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Image
              source={Images.HOME_LEFT_IMG}
              style={{ height: height * 0.25, width: width * 0.5 }}
            />
          </View>
          <View style={{ position: "absolute", left: 0, right: 0 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "center",
                fontFamily: "Alata-Regular",
              }}
            >
              HOW{"\n"} DECARBONIZER {"\n"} WORKS
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ position: "relative" }}>
        <View>
          <Image
            source={Images.HOME_RIGHT_IMG}
            style={{ height: height * 0.25, width: width * 0.5 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
          }}
        >
          <ScrollView
            nestedScrollEnabled={true}
            onTouchStart={(ev) => {
              setEnabled(false);
            }}
            onMomentumScrollEnd={(e) => {
              setEnabled(true);
            }}
            onScrollEndDrag={(e) => {
              setEnabled(true);
            }}
            style={{ maxHeight: height * 0.21 }}
          >
            <TouchableOpacity activeOpacity={0.7}>
              <Text
                style={{
                  textTransform: "uppercase",
                  color: "#fff",
                  fontSize: 20,
                  textAlign: "center",
                  fontFamily: "Alata-Regular",
                  paddingTop: 10,
                }}
              >
                pROJECT nEWS
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 15,
                  marginTop: 10,
                }}
              >
                <View style={{ marginRight: 15 }}>
                  {landing_data?.latest_news?.country?.flag_url ? (
                    <Image
                      style={{
                        height: 33,
                        width: 45,
                      }}
                      source={{
                        uri: landing_data?.latest_news?.country?.flag_url,
                      }}
                    />
                  ) : null}
                </View>
                <Text
                  style={{
                    color: "#fff",
                    color: "#fff",
                    fontSize: 20,
                    textAlign: "center",
                    fontFamily: "Alata-Regular",
                  }}
                >
                  {landing_data?.latest_news?.country?.name}
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 15,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Alata-Regular",
                  }}
                >
                  {landing_data?.latest_news
                    ? landing_data?.latest_news?.body
                        .replace(/(<([^>]+)>)/gi, "")
                        .replace(/&(nbsp|amp|quot|lt|gt);/g, " ")
                    : null}
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default HomeBottom;

const styles = StyleSheet.create({});
