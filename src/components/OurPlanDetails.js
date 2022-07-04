import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
  Modal,
  TouchableHighlight,
} from "react-native";
import Tooltip from "react-native-walkthrough-tooltip";
import { height, width } from "../services/dimensions";
import Images from "../assets/images";

const OurPlanDetails = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [showTip, setTip] = useState(false);
  const [showLeaf, setshowLeaf] = useState(false);
  const [showLocation, setshowLocation] = useState(false);
  const [showRocket, setshowRocket] = useState(false);
  const [toggle, setToggle] = useState(false);

  console.log(showTip, "showTip");
  console.log(showLeaf, "showLeaf");
  console.log(showLocation, "showLocation");
  console.log(showRocket, "showRocket");

  const data = [
    {
      title: [
        {
          image: Images.OUR_PLAN_TOUR,
          Flag: Images.TOUR_ICON,
          Name: "Tourist",
          NumberData: "3",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "3.5",
          Text: "Tourist is fremium so can browse all data but does not participate in impact outcomes",
          backG: true,
          getDa: "Browse all data",
        },
      ],
    },
    {
      title: [
        {
          image: Images.EMPOWER_ICON,
          Flag: Images.EMP_ICON,
          Name: "Empowerer",
          NumberData: "2",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "2.2",
          Text: "10$ per Month / Kick Start Your Project",
          backG: false,
          getDa: "Browse all data",
        },
      ],

      active: true,
    },
    {
      title: [
        {
          image: Images.PHILAN_TH,
          Flag: Images.HELP_ICON,
          Name: "Philanthropist",
          NumberData: "9",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "11.4",
          Text: "NFT Token",
          backG: true,
          getDa: "Browse all data",
        },
      ],
    },
    {
      title: [
        {
          image: Images.INVESTOR,
          Flag: Images.INVESTOR_ICON,
          Name: "Investor",
          NumberData: "9",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "11.4",
          Text: "Investor All the Data",
          backG: false,
          getDa: "Browse all data",
        },
      ],

      active: true,
    },
  ];

  const displayLeft = (title) => {
    console.log("this is a title a ", title);
    switch (title) {
      case "funded":
        return "28%";
      case "offset":
        return "43%";
      case "locations":
        return "60%";
      case "projects launched":
        return "80%";
    }
  };
  const displayToolTip = (title, state) => {
    switch (title) {
      case "funded":
        return (
          state(true),
          setshowLeaf(false),
          setshowLocation(false),
          setshowRocket(false)
        );
      case "offset":
        return (
          state(true),
          setTip(false),
          setshowLocation(false),
          setshowRocket(false)
        );
      case "locations":
        return (
          state(true), setshowLeaf(false), setTip(false), setshowRocket(false)
        );
      case "projects launched":
        return (
          state(true), setshowLeaf(false), setshowLocation(false), setTip(false)
        );
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#181818",
      }}
    >
      <View>
        {data?.map((item, index) => {
          console.log("item", item);
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
              <View
                style={{
                  position: "relative",
                  height: 250,
                  borderBottomColor: "#000",
                  borderBottomWidth: 5,
                }}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.AccordaionTit}
                  onPress={() => {
                    setCurrentIndex(index === currentIndex ? null : index),
                      setshowLeaf(false),
                      setshowLocation(false),
                      setTip(false),
                      setshowRocket(false);
                  }}
                >
                  <View>
                    <View>
                      <View>
                        <Image
                          source={item.title[0].image}
                          style={{ height: "100%" }}
                        />
                      </View>
                    </View>
                    <View
                      style={
                        item.title[0].backG === true
                          ? {
                              position: "absolute",
                              left: 0,
                              backgroundColor: "rgba(0, 0, 0, 0.69)",
                              height: "100%",
                              width: "60%",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingLeft: 20,
                              paddingRight: 20,
                            }
                          : {
                              position: "absolute",
                              right: 0,
                              backgroundColor: "rgba(0, 0, 0, 0.69)",
                              height: "100%",
                              width: "60%",
                              alignItems: "center",
                              justifyContent: "center",
                              paddingLeft: 20,
                              paddingRight: 20,
                            }
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "flex-start",
                          //   justifyContent: "center",
                          //   backgroundColor: "red",
                          width: "100%",
                        }}
                      >
                        <View>
                          <Image
                            source={item.title[0].Flag}
                            style={{ width: 40, height: 40 }}
                          />
                        </View>
                        <View style={{ marginLeft: 20 }}>
                          <Text
                            style={{
                              color: "#fff",
                              fontFamily: "Alata-Regular",
                              fontSize: 21,
                            }}
                          >
                            {item.title[0].Name}
                          </Text>
                        </View>
                      </View>
                      <View style={{ marginTop: height * 0.02, width: "100%" }}>
                        <Text
                          style={{
                            color: "#fff",
                            fontFamily: "Alata-Regular",
                            fontSize: 15,
                          }}
                        >
                          {item.title[0].Text}
                        </Text>
                      </View>
                      <TouchableOpacity
                        style={{ width: "100%" }}
                        onPress={() => {
                          setCurrentIndex(
                            index === currentIndex ? null : index
                          ),
                            setshowLeaf(false),
                            setshowLocation(false),
                            setTip(false),
                            setshowRocket(false);
                        }}
                      >
                        <View
                          style={{
                            //   backgroundColor: "yellow",
                            width: "100%",
                            // paddingLeft: 10,
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <View>
                            <Text
                              style={{
                                color: "#A8C634",
                                // backgroundColor: "red",
                                width: "100%",
                                fontFamily: "Abel-Regular",
                                marginTop: 10,
                                fontSize: 17,
                              }}
                            >
                              {item.title[0].getDa}
                            </Text>
                          </View>
                          <View style={{ marginLeft: 10, marginTop: 10 }}>
                            <Image source={Images.RIGHT_ARROW} />
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {index === currentIndex && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={[
                      styles.AccordaionContent,
                      {
                        position: "relative",
                        height: height * 0.1,
                        width: width * 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#A8C634",
                      },
                    ]}
                  >
                    <View>
                      <Text
                        style={{
                          color: "#fff",
                          fontSize: 25,
                          color: "#fff",
                          fontFamily: "Alata-Regular",
                        }}
                      >
                        Buy Now
                      </Text>
                    </View>
                  </View>
                </View>
              )}
            </View>
          );
        })}
      </View>
      <View style={{ height: 80 }} />
    </View>
  );
};

export default OurPlanDetails;

const styles = StyleSheet.create({});
