import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
} from "react-native";
import Images from "../assets/images";
import { height, width } from "../services/dimensions";

const ProjectsCountry = ({ project, navigation }) => {
  console.log("project county component props", project);

  return (
    <View
      style={{
        flexDirection: "row",
        height: 140,
        width: "33.3333333333%",
      }}
    >
      <TouchableOpacity
        key={project?.id}
        activeOpacity={0.7}
        onPress={() =>
          navigation.navigate("TreesProject", {
            projectId: project?.id,
          })
        }
        style={{
          position: "relative",
          height: 140,
          width: 140,
        }}
      >
        <View>
          <Image source={Images.PROJECT_TREE_IMG} style={{ height: "100%" }} />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 17,
              fontFamily: "Alata-Regular",
              paddingLeft: 8,
              paddingTop: 10,
            }}
          >
            {/* {project?.location?.name} */}
            {"\n"}
            {project?.name}
          </Text>
        </View>
      </TouchableOpacity>

      {/* <View
        style={{
          // position: "absolute",
          zIndex: 99,
          // height: 400,
          width: "100%",
          bottom: 0,
        }}
      >
        <View
          style={{
            position: "absolute",
            width: width * 0.5,
            right: width * -0.1,
            top: height * 0.15,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontFamily: "Alata-Regular",
              textAlign: "left",
            }}
          >
            {project?.hero?.name}
          </Text>
        </View>
      </View>
      <View>
        <Image
          source={{ uri: project?.hero?.image_url }}
          style={{
            backgroundColor: "red",
            height: height * 1,
          }}
        />
      </View> */}
    </View>
  );
};

export default ProjectsCountry;
