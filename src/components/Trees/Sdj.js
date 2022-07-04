import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { height, width } from "../../services/dimensions";
import Images from "../../assets/images";
import { useSelector } from "react-redux";

const Sdj = () => {
  const { current_project } = useSelector((state) => state.singleProject);
  return (
    <View style={{ backgroundColor: "#181818" }}>
      <View
        style={{
          justifyContent: "center",
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 15,
          marginTop: 15,
        }}
      >
        <View>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              marginBottom: 15,
            }}
          >
            UN SDG scope of impact
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {current_project?.project_sdgs &&
          current_project?.project_sdgs.length ? (
            current_project?.project_sdgs.map((project_sdgs) => {
              return (
                <View
                  key={project_sdgs?.id}
                  style={{
                    backgroundColor: "#DCA63A",
                    height: 88,
                    width: 88,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  {project_sdgs?.image_url ? (
                    <Image
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                      source={{
                        uri: project_sdgs.image_url,
                      }}
                    />
                  ) : null}
                </View>
              );
            })
          ) : (
            <View>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontFamily: "Alata-Regular",
                  fontSize: 19,
                  fontWeight: "400",
                }}
              >
                No Project Sdgs Founds
              </Text>
            </View>
          )}

          {/* <View
            style={{
              backgroundColor: "#DCA63A",
              height: 88,
              width: 88,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Image source={Images.ZERO_HUNGER} />
          </View> */}
          {/* <View
            style={{
              backgroundColor: "#3F7E45",
              height: 88,
              width: 88,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 10,
            }}
          >
            <Image source={Images.CLIMATE_ACTION} />
          </View> */}
          {/* <View
            style={{
              backgroundColor: "#56C02A",
              height: 88,
              width: 88,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={Images.LIFE_ON_HAND} />
          </View> */}
        </View>
        <View style={{ marginTop: height * 0.02 }}>
          <TouchableOpacity>
            <Text
              style={{
                color: "#59B7FD",
                fontSize: 14,
                fontFamily: "Alata-Regular",
              }}
            >
              More about the UN sustainable development goals (SDGs){`>`}
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{ marginTop: height * 0.02 }}>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              fontFamily: "Alata-Regular",
              fontWeight: "300",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </Text>
        </View> */}
      </View>
    </View>
  );
};

export default Sdj;

const styles = StyleSheet.create({});
