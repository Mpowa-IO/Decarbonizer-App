import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Logo from "../components/Logo";
import OurPlanDetails from "../components/OurPlanDetails";
import Container from "../components/container";
import Images from "../assets/images";
import TreesThumb from "../components/Trees/TreesThumb";
import FundedDetails from "../components/Trees/FundedDetails";
import { height } from "../services/dimensions";
import Sdj from "../components/Trees/Sdj";
import TreesMain from "../components/Trees/TreesMain";
import { getSingleProject } from "../store";
import { useDispatch, useSelector } from "react-redux";

const TreesProject = (props) => {
  const dispatch = useDispatch();

  const { route } = props;

  const { projectId } = route.params;

  console.log("projectiD", projectId);

  React.useEffect(() => {
    dispatch(getSingleProject(projectId));
  }, [projectId]);

  const { current_project, current_project_loading } = useSelector(
    (state) => state.singleProject
  );

  return (
    <View>
      <View>
        <Logo {...props} isArrow backgroundColor={"#181818"} />
      </View>
      <View style={styles.HomeFilter}>
        {current_project_loading ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : null}

        <Container>
          <View style={styles.FilterMain}>
            <View>
              <Text style={styles.Text}>{current_project?.name}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: "center",
                }}
              >
                {current_project?.country?.flag_url ? (
                  <Image
                    style={{
                      height: 30,
                      width: 50,
                    }}
                    source={{
                      uri: current_project?.country?.flag_url,
                    }}
                  />
                ) : (
                  <Image source={Images.TREES_ICON} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </View>
      <ScrollView>
        <View>
          <TreesThumb />
        </View>
        <View style={{ paddingBottom: height * 0.2 }}>
          <FundedDetails />
          <Sdj />
          <TreesMain {...props} />
        </View>
      </ScrollView>
    </View>
  );
};

export default TreesProject;

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
