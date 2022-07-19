import React, { useEffect, useState } from "react";
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
import Tooltip from "react-native-walkthrough-tooltip";
import { height, width } from "../services/dimensions";
import Images from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { getCountryNews, getProjectCountries } from "../store";
import ProjectsCountry from "./ProjectsCountry";
import ProjectCountryNews from "./ProjectCountryNews";

const FundingDetails = ({ navigation }) => {
  const dispatch = useDispatch();
  const { project_countries, project_loading } = useSelector(
    (state) => state.projectReucer
  );

  const { country_news, country_news_loading } = useSelector(
    (state) => state.countryNewsReducer
  );

  console.log("country_news", project_countries);

  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [showTip, setTip] = useState(false);
  const [showLeaf, setshowLeaf] = useState(false);
  const [showLocation, setshowLocation] = useState(false);
  const [showRocket, setshowRocket] = useState(false);
  const [toggle, setToggle] = useState(false);

  React.useEffect(() => {
    dispatch(getProjectCountries());
  }, []);

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
  const displayToolTip = (title, tipScore) => {
    switch (title) {
      case "funded":
        return "funded";
      case "offset":
        return "offset";
      case "locations":
        return "locations";
      case "projects launched":
        return "projects launched";
    }
  };

  const [isTipVisibleId, setIsTipVisible] = useState(null);

  const [currentToolTipsText, setCurrentTipText] = useState(
    "Across all projects Malawi has achieved 44% funding"
  ); //tooltipe big text
  const [isTextTipVisible, setIsTextTipVisible] = useState(false); // make tooltip visible
  const [currentToolTipTitle, setCurrentToolTipTile] = useState(""); // tooltip text

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    } else {
      return num;
    }
  }

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", () => {
  //     setIsTipVisible(null);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <View
      style={{
        backgroundColor: "#181818",
        // marginBottom: 140,
        // paddingBottom: 50,
      }}
    >
      <View>
        {project_loading ? (
          <ActivityIndicator size="large" color="#FFFFFF" />
        ) : null}
        {project_countries?.map((item, index) => {
          return (
            <>
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
                    borderBottomColor: "#000",
                    height: height * 0.3,
                    borderBottomWidth: 5,
                  }}
                >
                  <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.AccordaionTit}
                    onPress={() => {
                      console.log("get news for this", item?.id);
                      dispatch(getCountryNews(item?.id));
                      setIsTipVisible((prev) =>
                        prev === item?.id ? null : item?.id
                      );
                    }}
                  >
                    <View>
                      <View>
                        <View>
                          <Image
                            source={{
                              uri: item?.images?.image_url,
                            }}
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
                            <Image
                              source={{
                                uri: item?.images.flag_url,
                              }}
                              style={{ height: 35, width: 45 }}
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
                              {item?.name}
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
                              {item?.projects_in_incubation
                                ? item?.projects_in_incubation
                                : 0}
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
                              projects at funding stage
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
                              Tonnes of CO2 offset pa. (est)
                            </Text>
                          </View>
                          <View>
                            <Text
                              style={{
                                color: "#A8C634",
                                fontSize: 22,
                                fontFamily: "Alata-Regular",
                              }}
                            >
                              {numFormatter(item?.co2_offset_annum)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                {isTipVisibleId === item?.id && (
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
                            Key Facts - {item?.name}
                          </Text>
                        </View>
                        <View
                          style={{
                            position: "relative",
                          }}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              // alignItems: "center",
                              justifyContent: "space-between",
                              marginTop: 20,
                            }}
                          >
                            <View>
                              <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                  setIsTextTipVisible(true);
                                  setCurrentToolTipTile("funded");
                                  setCurrentTipText("");
                                }}
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
                                    <Image source={Images.KEY_PIGGY} />
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
                                      {item?.key_facts?.funded_percentage}
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
                                      funded
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View>
                            <View>
                              <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                  setCurrentToolTipTile("offset");
                                  setIsTextTipVisible(true);
                                }}
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
                                    <Image source={Images.KEY_LEAF} />
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
                                      {item?.key_facts?.co2_offset_overall}t
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
                                      offset
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View>

                            {/* leaft tip */}

                            <View>
                              <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                  setCurrentToolTipTile("locations");
                                  setIsTextTipVisible(true);
                                }}
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
                                    <Image source={Images.KEY_LOCATION} />
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
                                      {item?.key_facts?.location_count}
                                      {/* {item.Score} */}
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
                                      locations
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View>
                            <View>
                              <TouchableOpacity
                                style={[styles.button]}
                                onPress={() => {
                                  setCurrentToolTipTile("projects launched");
                                  setIsTextTipVisible(true);
                                }}
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
                                    <Image source={Images.KEY_ROCKET} />
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
                                      {item?.key_facts?.completed_projects}
                                      {/* {item.Score} */}
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
                                      projects launched
                                    </Text>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                      {isTextTipVisible && (
                        <View
                          style={{
                            backgroundColor: "#A8C634",
                            width: width * 1,
                            position: "absolute",
                            height: "100%",
                            maxHeight: 100,
                            alignItems: "center",
                            zIndex: 999,
                            bottom:
                              currentToolTipTitle === "projects launched"
                                ? -62
                                : -50,
                            justifyContent: "center",
                          }}
                          onPress={() => navigation.navigate("ProjectDetails")}
                        >
                          <View
                            style={{
                              position: "absolute",
                              top: -20,
                              left: displayLeft(currentToolTipTitle),
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
                                onPress={() => {
                                  setIsTextTipVisible(false);
                                }}
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
                                {`Across all Projects ${item?.name} has achieved `}
                                {currentToolTipTitle === "funded"
                                  ? item?.key_facts?.funded_percentage
                                  : null}
                                {currentToolTipTitle === "offset"
                                  ? `${item?.key_facts?.co2_offset_overall}t`
                                  : null}
                                {currentToolTipTitle === "locations"
                                  ? `${item?.key_facts?.location_count}`
                                  : null}
                                {currentToolTipTitle === "projects launched"
                                  ? `${item?.key_facts?.completed_projects}`
                                  : null}
                                {` ${displayToolTip(currentToolTipTitle)}`}
                              </Text>
                            </View>
                          </View>
                        </View>
                      )}
                    </View>

                    <View
                      style={{
                        zIndex: -1,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* projects map */}
                        {item.projects.map((project, index) => {
                          return (
                            <ProjectsCountry
                              project={project}
                              navigation={navigation}
                              key={index}
                            />
                          );
                        })}
                      </View>
                      <View>
                        {/* hero image */}
                        {item?.projects.slice(0, 1).map((project, index) => {
                          return (
                            <>
                              {project?.hero?.image_url ? (
                                <View
                                  key={index}
                                  style={{
                                    // height: 400,
                                    width: "100%",
                                    bottom: 0,
                                  }}
                                >
                                  <View>
                                    <Image
                                      source={{ uri: project?.hero?.image_url }}
                                      style={{
                                        height: height * 1,
                                      }}
                                    />
                                  </View>
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
                              ) : null}
                            </>
                          );
                        })}
                      </View>
                    </View>
                    <View
                      style={{
                        position: "relative",
                      }}
                    >
                      <View>
                        {/* country news  */}
                        {country_news.length
                          ? country_news.map((news, index) => {
                              return (
                                <ProjectCountryNews news={news} key={index} />
                              );
                            })
                          : null}
                      </View>
                    </View>
                  </View>
                )}
              </View>
            </>
          );
        })}
      </View>
    </View>
  );
};

export default FundingDetails;

const styles = StyleSheet.create({});
