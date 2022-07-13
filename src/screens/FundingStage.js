import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Images from "../assets/images";
import Container from "../components/container";
import Logo from "../components/Logo";
import FundingDetails from "../components/FundingDetails";
import { height, width } from "../services/dimensions";

const FundingStage = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View>
        <Logo {...props} />
      </View>
      <View style={styles.HomeFilter}>
        <Container>
          <View style={styles.FilterMain}>
            <View>
              <Text style={styles.Text}>Projects at funding stage</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "center",
                }}
              >
                <Image source={Images.FILTER} />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <FundingDetails {...props} />
        <View
          style={{ position: "relative", height: height * 0.4, zIndex: -1 }}
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
              START YOUR IMPACT TODAY
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  HomeFilter: {
    backgroundColor: "#2E2E2E",
  },
  FilterMain: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    justifyContent: "space-between",
    padding: 15,
  },

  Text: {
    color: "#fff",
    fontFamily: "Alata-Regular",
    textTransform: "uppercase",
  },
});
export default FundingStage;
