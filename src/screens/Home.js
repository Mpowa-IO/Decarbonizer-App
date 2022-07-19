import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Images from "../assets/images";
import BottomNav from "../components/BottomNav";
import HomeBottom from "../components/HomeBottom";
import HomeCenter from "../components/HomeCenter";
import HomeTop from "../components/HomeTop";
import { height, width } from "../services/dimensions";
import MyTabs from "../services/navigation/BottomTab";
import BottomTab from "../services/navigation/BottomTab";
import { getLandingData } from "../store/landing/action";
import { useRoute } from "@react-navigation/native";

export default function Home(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const route = useRoute();
  console.log("navigation", route.name);

  const { landing_data } = useSelector((state) => state.landingReducer);

  console.log("landing_data", landing_data);

  useEffect(() => {
    dispatch(getLandingData());
  }, []);

  return (
    // <ScrollView style={{flex: 1}}>
    <View
      style={{
        flex: 1,
        backgroundColor: "#181818",
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <View style={styles.container}>
          <View style={styles.HomeTopWrapper}>
            <HomeTop {...props} />
          </View>
        </View>
        {/* <View>
          <HomeCenter {...props} />
        </View> */}
        <View
          style={{
            paddingBottom: 80,
          }}
        >
          <View
            style={{ position: "relative", height: height * 0.25, zIndex: -1 }}
          >
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
                START YOUR IMPACT
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  fontFamily: "Alata-Regular",
                }}
              >
                Join the growing crowd of people making a measurable, traceable,
                transparent impact in climate-positive giving and investing.
              </Text>
              <View style={{ marginTop: height * 0.02 }}>
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
                    Learn More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <HomeBottom {...props} />
        </View>
      </ScrollView>
    </View>

    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  HomeTopWrapper: {
    // flex: 0,
  },
});
