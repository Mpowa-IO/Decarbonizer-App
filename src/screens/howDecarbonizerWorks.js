import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Images from "../assets/images";
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/container";
import { getHowDecarbonizerWrok } from "../store";

const HowDecarbonizerWorks = ({ navigation }) => {
  const dispatch = useDispatch();

  const { howItWork, how_It_Work_loading } = useSelector(
    (state) => state.howItWorkReducer
  );

  console.log("howItWork", howItWork);

  React.useEffect(() => {
    if (Object.keys(howItWork).length === 0) {
      dispatch(getHowDecarbonizerWrok());
    }
  }, []);

  return (
    <ImageBackground style={styles.container} source={Images.CONTACT_BACKGROUD}>
      <View>
        <Breadcrumbs
          BreadText={
            howItWork?.title ? `${howItWork?.title}` : "How Decarbonizer works"
          }
          Leftstyle={-5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <ScrollView>
        <Container isPadding>
          {how_It_Work_loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : null}
          <Text style={styles.TextMain}>
            {howItWork?.body
              ? howItWork?.body.replace(/(<([^>]+)>)/gi, "")
              : null}
            {/* Decarbonizer uses donations to fund energy and water projects,
            initially in Africa.{"\n"}
            {"\n"}
            We only fund projects which are inherently carbon-negative and
            climate-positive, which means they attract voluntary carbon credits,
            which, in turn, means that businesses who donate, will, in return,
            receive certification of the amount of carbon offset. {"\n"}
            {"\n"}
            These carbon credits can help an organisation to show its
            stakeholders that it is meeting its own environmental and
            sustainability goals (ESGs).{"\n"}
            {"\n"}
            To support this we provide full documentation in downloadable PDF
            format, which can be used in corporate reporting material.{"\n"} */}
          </Text>
        </Container>
      </ScrollView>
    </ImageBackground>
  );
};

export default HowDecarbonizerWorks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#323232",
  },
  TextMain: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Alata-Regular",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
