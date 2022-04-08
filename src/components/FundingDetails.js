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
import { width } from "../services/dimensions";
import Images from "../assets/images";

const FundingDetails = ({ navigation }) => {
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
          image: Images.FUNDING_ONE,
          Flag: Images.MALAWI,
          Name: "Malawi",
          NumberData: "3",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "3.5",
        },
      ],
      Content: [
        {
          KeyFact: "Key Facts - Malawi",
          iconContent: [
            {
              image: Images.KEY_PIGGY,
              Score: "43%",
              Title: "funded",
              state: showTip,
              ThisState: setTip,
              TooltipText:
                "Across all projects Malawi has achieved 43% funding",
            },
            {
              image: Images.KEY_LEAF,
              Score: "3200t",
              Title: "offset",
              state: showLeaf,
              ThisState: setshowLeaf,
              TooltipText:
                "Across all projects Malawi has achieved 44% funding",
            },
            {
              image: Images.KEY_LOCATION,
              Score: "17",
              Title: "locations",
              state: showLocation,
              ThisState: setshowLocation,
              TooltipText:
                "Across all projects Malawi has achieved 45% funding",
            },
            {
              image: Images.KEY_ROCKET,
              Score: "21/46",
              Title: "projects launched",
              state: showRocket,
              ThisState: setshowRocket,
              TooltipText:
                "Across all projects Malawi has achieved 46% funding",
            },
          ],
          GreenTit: [
            {
              title: "Project 1 - Proin Gravida",
            },
            {
              title: "Project 2 - Dolor Sit Amet",
            },
            {
              title: "Project 3 - Proin Gravida",
            },
          ],
        },
      ],
      active: true,
    },
    {
      title: [
        {
          image: Images.FUNDING_TWO,
          Flag: Images.ZIMBABWE,
          Name: "Zimbabwe",
          NumberData: "2",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "2.2",
        },
      ],
      Content: [
        {
          KeyFact: "Key Facts - Malawi",
          iconContent: [
            {
              image: Images.KEY_PIGGY,
              Score: "43%",
              Title: "funded",
              state: showTip,
              ThisState: setTip,
              TooltipText:
                "Across all projects Malawi has achieved 43% funding",
            },
            {
              image: Images.KEY_LEAF,
              Score: "3200t",
              Title: "offset",
              state: showLeaf,
              ThisState: setshowLeaf,
              TooltipText:
                "Across all projects Malawi has achieved 43% funding",
            },
            {
              image: Images.KEY_LOCATION,
              Score: "17",
              Title: "locations",
              state: showLocation,
              ThisState: setshowLocation,
              TooltipText:
                "Across all projects Malawi has achieved 43% funding",
            },
            {
              image: Images.KEY_ROCKET,
              Score: "21/46",
              Title: "projects launched",
              state: showRocket,
              ThisState: setshowRocket,
              TooltipText:
                "Across all projects Malawi has achieved 43% funding",
            },
          ],
          GreenTit: [
            {
              title: "Project 1 - Proin Gravida",
            },
            {
              title: "Project 2 - Dolor Sit Amet",
            },
            {
              title: "Project 3 - Proin Gravida",
            },
          ],
        },
      ],
      active: true,
    },
    {
      title: [
        {
          image: Images.FUNDING_THREE,
          Flag: Images.SOUTH_AFRICA,
          Name: "South \n Africa",
          NumberData: "9",
          Stage: "projects  at funding stage",
          Tonnes: "Tonnes of CO2 offset pa. (est)",
          TonnesNumber: "11.4",
        },
      ],
      Content: [
        {
          KeyFact: "Key Facts - Malawi",
          iconContent: [
            {
              image: Images.KEY_PIGGY,
              Score: "43%",
              Title: "funded",
              state: showTip,
              ThisState: setTip,
              TooltipText:
                "Across all projects Malawi has achieved 43% funding",
            },
            {
              image: Images.KEY_LEAF,
              Score: "3200t",
              Title: "offset",
              state: showLeaf,
              ThisState: setshowLeaf,
              TooltipText:
                "Across all projects Malawi has achieved 54% funding",
            },
            {
              image: Images.KEY_LOCATION,
              Score: "17",
              Title: "locations",
              state: showLocation,
              ThisState: setshowLocation,
              TooltipText:
                "Across all projects Malawi has achieved 55% funding",
            },
            {
              image: Images.KEY_ROCKET,
              Score: "21/46",
              Title: "projects launched",
              state: showRocket,
              ThisState: setshowRocket,
              TooltipText:
                "Across all projects Malawi has achieved 56% funding",
            },
          ],
          GreenTit: [
            {
              title: "Project 1 - Proin Gravida",
            },
            {
              title: "Project 2 - Dolor Sit Amet",
            },
            {
              title: "Project 3 - Proin Gravida",
            },
          ],
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
    console.log("this is a title a ", title);
    console.log("this is a state a ", state);
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
                      style={{
                        position: "absolute",
                        right: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.69)",
                        height: "100%",
                        width: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <View>
                          <Image source={item.title[0].Flag} />
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
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View>
                          <Text
                            style={{
                              color: "#A8C634",
                              fontSize: 30,
                              fontFamily: "Alata-Regular",
                            }}
                          >
                            {item.title[0].NumberData}
                          </Text>
                        </View>
                        <View style={{ marginBottom: 10, marginTop: 10 }}>
                          <Text
                            style={{
                              color: "#fff",
                              marginLeft: 20,
                              width: 110,
                              fontFamily: "Alata-Regular",
                              fontSize: 14,
                            }}
                          >
                            {item.title[0].Stage}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View>
                          <Text
                            style={{
                              color: "#fff",
                              width: 110,
                              fontFamily: "Alata-Regular",
                              fontSize: 14,
                            }}
                          >
                            {item.title[0].Tonnes}
                          </Text>
                        </View>
                        <View>
                          <Text
                            style={{
                              color: "#A8C634",
                              fontSize: 30,
                              fontFamily: "Alata-Regular",
                            }}
                          >
                            {item.title[0].TonnesNumber}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              {index === currentIndex && (
                <View
                  style={[styles.AccordaionContent, { position: "relative" }]}
                >
                  <View style={{ position: "relative" }}>
                    <Image source={Images.TOP_SHAPE} />
                  </View>
                  <View style={{ flexDirection: "row", padding: 20 }}>
                    <View style={{ width: "30%" }}>
                      <Image source={Images.KEY_MAP} />
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                        width: "70%",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            color: "#fff",
                            fontFamily: "Alata-Regular",
                            fontSize: 24,
                          }}
                        >
                          {item.Content[0].KeyFact}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          marginTop: 20,
                        }}
                      >
                        {item?.Content[0]?.iconContent?.map((item, index) => {
                          //console.log(item, 'GreenTit is it');
                          return (
                            <>
                              <View>
                                <TouchableOpacity
                                  style={[styles.button]}
                                  onPress={() =>
                                    displayToolTip(item.Title, item.ThisState)
                                  }
                                >
                                  <View
                                    style={{
                                      alignItems: "center",
                                      padding: 5,
                                      width: 71,
                                      flexDirection: "column",
                                    }}
                                  >
                                    <View style={{ height: 26 }}>
                                      <Image source={item.image} />
                                    </View>
                                    <View
                                      style={{
                                        marginBottom: 5,
                                      }}
                                    >
                                      <Text
                                        style={{
                                          fontSize: 14,
                                          fontFamily: "Alata-Regular",
                                          color: "#fff",
                                        }}
                                      >
                                        {item.Score}
                                      </Text>
                                    </View>
                                    <View>
                                      <Text
                                        style={{
                                          fontSize: 14,
                                          fontFamily: "Alata-Regular",
                                          color: "#fff",
                                          height: 70,
                                          width: 64,
                                          textAlign: "center",
                                        }}
                                      >
                                        {item.Title}
                                      </Text>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                              </View>
                            </>
                          );
                        })}
                      </View>
                    </View>
                  </View>

                  {item?.Content[0]?.iconContent?.map((item, index) => {
                    console.log("icon content", item);
                    return (
                      item.state && (
                        <>
                          <View
                            style={{
                              backgroundColor: "#A8C634",
                              width: "100%",
                              position: "absolute",
                              height: "100%",
                              maxHeight: 100,
                              alignItems: "center",
                              top: "25%",
                              zIndex: 1,
                              justifyContent: "center",
                            }}
                          >
                            <View
                              style={{
                                position: "absolute",
                                top: -20,
                                left: displayLeft(item.Title),
                              }}
                            >
                              <Image
                                source={Images.TOOLTIP_SHAPE}
                                style={{ width: 84 }}
                              />
                            </View>

                            <View
                              style={{
                                position: "absolute",
                                alignItems: "flex-end",
                                width: "100%",
                                height: "100%",
                                zIndex: 99,
                                right: 10,
                                top: 10,
                              }}
                            >
                              <View>
                                <TouchableOpacity
                                  onPress={() => item.ThisState(false)}
                                  style={{
                                    width: 50,
                                    height: 50,
                                    alignItems: "flex-end",
                                  }}
                                >
                                  <Image
                                    source={Images.CLOSE}
                                    style={{ width: 10, height: 10 }}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                            <View>
                              <View>
                                <Text
                                  style={{
                                    fontSize: 14,
                                    color: "#000",
                                    fontFamily: "Alata-Regular",
                                  }}
                                >
                                  {item.TooltipText}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </>
                      )
                    );
                  })}

                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate("ProjectDetails")}
                      style={{ position: "relative", height: 138, width: 138 }}
                    >
                      <View>
                        <Image source={Images.GREEN_BOX} />
                      </View>
                      <View style={{ position: "absolute", top: 0 }}>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 24,
                            fontFamily: "Alata-Regular",
                            paddingLeft: 10,
                            paddingTop: 10,
                          }}
                        >
                          Project 1 - Proin Gravida
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        position: "relative",
                        height: 138,
                        width: 138,
                        paddingBottom: 20,
                      }}
                    >
                      <View>
                        <Image source={Images.GREEN_IMG_BLACK} />
                      </View>
                      <View style={{ position: "absolute", top: 0 }}>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 24,
                            fontFamily: "Alata-Regular",
                            paddingLeft: 10,
                            paddingTop: 10,
                          }}
                        >
                          Project 2 - Proin Gravida
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={{
                        position: "relative",
                        height: 138,
                        width: 138,
                        paddingBottom: 20,
                      }}
                    >
                      <View>
                        <Image source={Images.GREEN_BOX} />
                      </View>
                      <View style={{ position: "absolute", top: 0 }}>
                        <Text
                          style={{
                            color: "#fff",
                            fontSize: 24,
                            fontFamily: "Alata-Regular",
                            paddingLeft: 10,
                            paddingTop: 10,
                          }}
                        >
                          Project 3 - Proin Gravida
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Image source={Images.VIDEO_BG} />
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

export default FundingDetails;

const styles = StyleSheet.create({});
