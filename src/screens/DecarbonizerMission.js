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
import { getMissionContent } from "../store/missionContent";

const DecarbonizerMission = ({ navigation }) => {
  const dispatch = useDispatch();

  const { mission, mission_loading } = useSelector(
    (state) => state.missionContent
  );

  console.log("mission_loading", mission);

  React.useEffect(() => {
    if (Object.keys(mission).length === 0) {
      dispatch(getMissionContent());
    }
  }, []);

  return (
    <ImageBackground style={styles.container} source={Images.MISSION_BG}>
      <View>
        <Breadcrumbs
          BreadText={mission?.title ? mission?.title : "Decarbonizer’s mission"}
          Leftstyle={-5}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Container isPadding>
          <ScrollView>
            {mission_loading ? (
              <ActivityIndicator size="large" color="#FFFFFF" />
            ) : null}
            <Text style={styles.TextMain}>
              {mission?.body
                ? mission?.body.replace(/(<([^>]+)>)/gi, "")
                : null}

              {/* Decarbonizer is brought to you by MPOWA - a start up based in the
              UK, Netherlands, and South Africa. {"\n"}
              {"\n"}
              We believe in a world without energy and water scarcity, where the
              sources of both have no negative effect on our children's health
              or the environment. {"\n"}
              {"\n"}
              We believe economic disparities must be eliminated, and that we
              must achieve social and environmental resilience.{"\n"}
              {"\n"}
              To realise this vision the world needs to harness clean
              technologies and accelerate the decentralisation of energy and
              water provision, in line with UN Strategic Development Goals
              (SDGs).
              {"\n"} */}
            </Text>
          </ScrollView>
        </Container>
      </View>
    </ImageBackground>
  );
};

export default DecarbonizerMission;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextMain: {
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "Alata-Regular",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
