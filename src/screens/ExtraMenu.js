import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Images from "../assets/images";
import BottomNav from "../components/BottomNav";

const DATA = [
  {
    id: "1",
    title: "Decarbonizer’s mission",
    path: "DecarbonizerMission",
  },
  {
    id: "2",
    title: "how decarbonizer works",
    path: "HowDecarbonizerWorks",
  },
  {
    id: "3",
    title: "FAQs",
    path: "Faq",
  },
  // {
  //   id: "4",
  //   title: "Reset Password",
  //   path: "ResetPassword",
  // },
  {
    id: "5",
    title: "Contact us",
    path: "ContactUs",
  },
];

const Item = ({ title, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const ExtraMenu = (props) => {
  const { navigation } = props;

  const renderItem = ({ item }) => (
    <Item title={item.title} onPress={() => navigation.navigate(item.path)} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.logoTop}>
        <Image source={Images.HEADER_LOGO} />
      </View>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <BottomNav {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181818",
  },
  logoTop: {
    paddingTop: 20,
    alignItems: "center",
  },
  item: {
    marginVertical: 0,
    marginHorizontal: 0,
    marginLeft: 40,
  },
  title: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "Alata-Regular",
    textTransform: "uppercase",
    marginTop: 50,
  },
});

export default ExtraMenu;
