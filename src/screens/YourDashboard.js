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
import Graph from "../components/Graph";
import ColorSelection from "../components/ColorSelection";
import PreLunch from "../components/PreLunch";
import { height } from "../services/dimensions";

const YourDashBoard = (props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View>
        <Logo {...props} isArrow />
      </View>
      <View style={styles.HomeFilter}>
        <Container>
          <View style={styles.FilterMain}>
            <View>
              <Text style={styles.Text}>YOUR DaSHBOARD</Text>
            </View>
          </View>
        </Container>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: "#000000" }}>
          <Graph />
        </View>
        <View style={{ backgroundColor: "#181818" }}>
          <ColorSelection />
        </View>
        <View style={{ paddingBottom: 100 }}>
          <PreLunch />
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
    backgroundColor: "#181818",
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
export default YourDashBoard;
