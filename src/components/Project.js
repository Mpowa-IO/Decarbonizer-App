import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Images from "../assets/images";
import Token from "./token/token";

const Project = (props) => {
  // const {setEnabled} = props;

  console.log(props, "props");

  const [enabled, setEnabled] = React.useState(true);
  const [toggle, setToggle] = React.useState(false);
  const [showTip, setTip] = useState(false);
  const [showLeaf, setshowLeaf] = useState(false);
  const [showLocation, setshowLocation] = useState(false);
  const [showRocket, setshowRocket] = useState(false);

  const data = [
    {
      img: Images.PROJECT_TOP_IMG,
      title: "Project 1",
      flag: Images.MALAWI,
      detailsName: "Paschal Mwalabu",
      detailsProject: "Water",
      detailsLocation: "Proin Gravida, Malawi",
      numberDetails: [
        {
          icon: Images.HOME_BOTTOM_IMG,
          Number: "750",
        },
        {
          icon: Images.USER_IMG,
          Number: "960",
        },
        {
          icon: Images.KEY_PIGGY,
          Number: "59%",
        },
        {
          icon: Images.KEY_LEAF,
          Number: "3500t",
        },
      ],
    },
  ];

  return (
    <View>
      <View>
        {data?.map((item, index) => {
          console.log("this is item from", item);
          return (
            <View style={{ position: "relative", height: 230 }}>
              <View style={{ width: "50%" }}>
                <Image source={item.img} style={{ height: "100%" }} />
                <View
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image source={Images.IMAGE_MAP} />
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "#000000",
                  opacity: 0.7,
                  height: "100%",
                  width: "50%",
                  padding: 5,
                  right: 0,
                }}
              >
                <View style={{ flexDirection: "row", padding: 10 }}>
                  <View>
                    <Text
                      style={{
                        color: "#fff",
                        fontFamily: "Alata-Regular",
                        fontSize: 24,
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <View>
                    <Image source={item.flag} />
                  </View>
                </View>
                <View>
                  <View style={{ padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: "Alata-Regular",
                          marginRight: 2,
                        }}
                      >
                        Hero:
                      </Text>
                      <Text
                        style={{
                          color: "#A8C634",
                          marginLeft: 2,
                          marginTop: 0,
                          fontFamily: "Alata-Regular",
                        }}
                      >
                        {item.detailsName}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: "Alata-Regular",
                          marginRight: 2,
                        }}
                      >
                        Project type:
                      </Text>
                      <Text
                        style={{
                          color: "#A8C634",
                          marginTop: 0,
                          marginLeft: 2,
                          fontFamily: "Alata-Regular",
                        }}
                      >
                        {item.detailsProject}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: "#fff",
                          fontFamily: "Alata-Regular",
                          marginRight: 2,
                        }}
                      >
                        Location:
                      </Text>
                      <Text
                        style={{
                          color: "#A8C634",
                          // textAlign: 'right',
                          width: 110,
                          marginTop: 0,
                          marginLeft: 2,
                          fontFamily: "Alata-Regular",
                        }}
                      >
                        {item.detailsLocation}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  {item.numberDetails.map((item, index) => {
                    console.log("item inside", item);
                    return (
                      <View>
                        <View>
                          <Image
                            source={item.icon}
                            style={{ height: 25 }}
                            resizeMode={"cover"}
                          />
                          <Text
                            style={{
                              color: "#fff",
                              fontFamily: "Alata-Regular",
                            }}
                          >
                            {item.Number}
                          </Text>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          );
        })}
      </View>
      <View>
        <View style={{ position: "relative", height: 230 }}>
          <View>
            <Image
              source={Images.PROJECT_BOTTOM_IMG}
              style={{ height: "100%" }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              width: "50%",
              backgroundColor: "#000",
              opacity: 0.7,
              height: "100%",
              padding: 8,
            }}
          >
            <View>
              <Text style={{ color: "#fff", fontFamily: "Alata-Regular" }}>
                About this project
              </Text>
            </View>
            <View style={{ marginTop: 5 }}>
              <ScrollView
                nestedScrollEnabled={true}
                onTouchStart={(ev) => {
                  setEnabled(false);
                }}
                onMomentumScrollEnd={(e) => {
                  setEnabled(true);
                }}
                onScrollEndDrag={(e) => {
                  setEnabled(true);
                }}
                style={{ maxHeight: 100 }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Alata-Regular",
                    opacity: 0.7,
                    height: 150,
                    paddingRight: 15,
                  }}
                >
                  This project will provide much needed Solvatten devices to a
                  community of around 750 households, 960 people. The overall
                  expected carbon offset per year is estimated at 3500t.
                </Text>
              </ScrollView>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image source={Images.BOOKMARK} />
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Alata-Regular",
                    textTransform: "uppercase",
                  }}
                >
                  save
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignItems: "center" }}
                onPress={() => setToggle(!toggle)}
              >
                <Image source={Images.TOKEN_IMG} />
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Alata-Regular",
                    textTransform: "uppercase",
                  }}
                >
                  token
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ alignItems: "center" }}>
                <Image source={Images.KEY_PIGGY} />
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Alata-Regular",
                    textTransform: "uppercase",
                  }}
                >
                  fund
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {toggle ? (
        <View style={{ padding: 10, backgroundColor: "#000000" }}>
          <Text style={{ color: "#fff", fontFamily: "Alata-Regular" }}>
            How does a Solvatten unit work?
          </Text>
        </View>
      ) : (
        <Token />
      )}
    </View>
  );
};

export default Project;

const styles = StyleSheet.create({});
