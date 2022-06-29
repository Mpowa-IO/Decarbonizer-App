import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Images from "../assets/images";
import Breadcrumbs from "../components/Breadcrumbs";
import Container from "../components/container";
import { getFaq } from "../store";
const data = [
  {
    title: "What types of projects is Decarbonizer supporting?",
    Content:
      "We support sustainable energy and water projects, with an initial focus on water purification devices.   These devices generate carbon credits as they rely on solar energy to purify water rather than burning wood and generating carbon dioxide.      ",
    active: true,
  },
  {
    title: "What sizes of projects is Decarbonizer supporting?",
    Content:
      "We support sustainable energy and water projects, with an initial focus on water purification devices.   These devices generate carbon credits as they rely on solar energy to purify water rather than burning wood and generating carbon dioxide.      ",
    active: true,
  },
  {
    title: "What is/are the pricing or packages for Decarbonizer?",
    Content:
      "We support sustainable energy and water projects, with an initial focus on water purification devices.   These devices generate carbon credits as they rely on solar energy to purify water rather than burning wood and generating carbon dioxide.      ",
    active: true,
  },
  {
    title: "Who or what is MPOWA?",
    Content:
      "We support sustainable energy and water projects, with an initial focus on water purification devices.   These devices generate carbon credits as they rely on solar energy to purify water rather than burning wood and generating carbon dioxide.      ",
    active: true,
  },
  {
    title: "What operating systems does Decarbonizer run on?",
    Content:
      "We support sustainable energy and water projects, with an initial focus on water purification devices.   These devices generate carbon credits as they rely on solar energy to purify water rather than burning wood and generating carbon dioxide.      ",
    active: true,
  },
  {
    title: "What different formats or devices does is is available on?",
    Content:
      "We support sustainable energy and water projects, with an initial focus on water purification devices.   These devices generate carbon credits as they rely on solar energy to purify water rather than burning wood and generating carbon dioxide.      ",
    active: true,
  },
];

const Faq = ({ navigation }) => {
  const dispatch = useDispatch();
  const { faqState, faq_loading } = useSelector((state) => state.faqReducer);

  useEffect(() => {
    dispatch(getFaq());
  }, []);

  console.log("faq_loading", faq_loading);
  const [currentIndex, setCurrentIndex] = React.useState(null);
  return (
    <ScrollView style={styles.container}>
      <View>
        <Breadcrumbs BreadText={"FAQs"} onPress={() => navigation.goBack()} />
      </View>
      <View>
        <ScrollView>
          {faq_loading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : null}

          {faqState?.map((item, index) => {
            return (
              <View
                style={[
                  styles.Accordaion,
                  {
                    borderColor: index === currentIndex ? "#7700EC" : "#E8D4FB",
                  },
                ]}
                key={index + 1}
              >
                <TouchableOpacity
                  style={styles.AccordaionTit}
                  onPress={() => {
                    setCurrentIndex(index === currentIndex ? null : index);
                  }}
                >
                  <View style={styles.Text}>
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 18,
                        fontFamily: "Alata-Regular",
                        width: 250,
                      }}
                      ellipsizeMode="tail"
                      numberOfLines={2}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View style={styles.Icon}>
                    {index === currentIndex ? (
                      <Image source={Images.UP_ARROW} />
                    ) : (
                      <Image source={Images.DOWN_ARROW} />
                    )}
                  </View>
                </TouchableOpacity>

                {index === currentIndex && (
                  <View style={styles.AccordaionContent}>
                    <Text
                      style={{
                        color: "#ffffff",
                        fontSize: 18,
                        fontFamily: "Alata-Regular",
                      }}
                    >
                      {item.body}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Faq;

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
  FlatListStyle: {
    marginTop: 15,
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "Alata-Regular",
    fontSize: 18,
    textTransform: "uppercase",
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    color: "#FFFFFF",
    marginBottom: 20,
    fontFamily: "Alata-Regular",
  },
  Links: {
    color: "#A8C634",
    fontSize: 18,
    fontFamily: "Alata-Regular",
  },
  SocialView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    backgroundColor: "rgba(32, 30, 33, 1)",
    paddingTop: 22,
    paddingBottom: 22,
  },
  Accordaion: {
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    paddingTop: 15,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  AccordaionContent: {},
  AccordaionTit: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    alignItems: "center",
  },
  AccordaionContent: {
    padding: 15,
    backgroundColor: "#323232",
    marginLeft: -18,
    marginRight: -18,
    paddingRight: 30,
    paddingLeft: 30,
  },
});
