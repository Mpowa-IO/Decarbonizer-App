import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { height, width } from "../../services/dimensions";
import { useSelector } from "react-redux";

const FundedDetails = () => {
  const { current_project } = useSelector((state) => state.singleProject);
  return (
    <View>
      <View
        style={{
          backgroundColor: "#000000",
          height: height * 0.05,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: "Alata-Regular",
            textAlign: "center",
          }}
        >
          Funded{" "}
          {current_project?.funding?.funded_percentage &&
          current_project?.funding?.funded_percentage
            ? current_project?.funding?.funded_percentage
            : null}{" "}
          of goal
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#000000",
          height: height * 0.1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View>
            <Text style={{ color: "white", fontFamily: "Alata-Regular" }}>
              $0m
            </Text>
          </View>
          <View
            style={{
              position: "relative",
              fontFamily: "Alata-Regular",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: height * 0.02,
                backgroundColor: "#847A79",
                width: width * 0.6,
              }}
            />
            <View
              style={{
                height: height * 0.02,
                backgroundColor: "#A8C634",
                width: width * 0.2,
                position: "absolute",
              }}
            />
            <View style={{ position: "absolute", top: height * 0.03 }}>
              <Text
                style={{
                  color: "#A8C634",
                  fontFamily: "Alata-Regular",
                  fontSize: 12,
                }}
              >
                $
                {current_project?.funding?.funding_provided &&
                current_project?.funding?.funding_provided
                  ? current_project?.funding?.funding_provided
                  : null}
              </Text>
            </View>
          </View>
          <View>
            <Text style={{ color: "white", fontFamily: "Alata-Regular" }}>
              $
              {current_project?.funding?.funding_required_millions
                ? `${current_project?.funding?.funding_required_millions}m`
                : null}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "#181818", padding: 20 }}>
        <TouchableOpacity
          style={{ backgroundColor: "#CAB037", padding: 10, borderRadius: 6 }}
          activeOpacity={0.7}
        >
          <Text
            style={{
              fontFamily: "Alata-Regular",
              textAlign: "center",
              fontSize: 22,
              color: "#2E2E2E",
            }}
          >
            Support this project now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#000000", padding: 20 }}>
        <View>
          <Text
            style={{
              color: "#FFFFFF",
              fontFamily: "Alata-Regular",
              fontSize: 19,
              fontWeight: "400",
            }}
          >
            Project Vision
          </Text>
        </View>
        <View style={{ marginTop: height * 0.02 }}>
          <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              lineHeight: 20,
            }}
          >
            {current_project?.vision
              ? current_project?.vision.replace(/(<([^>]+)>)/gi, "")
              : null}
          </Text>
          {/* <Text
            style={{
              color: "#fff",
              fontFamily: "Alata-Regular",
              fontSize: 14,
              lineHeight: 20,
              marginTop: height * 0.03,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula dignissim aliquam. Quisque tristique auctor erat, a gravida
            lectus fringilla eu. Nulla pulvinar accumsan diam id luctus. Morbi
            placerat nisi odio, eu imperdiet risus ornare sodales.
          </Text> */}
          <View style={{ marginTop: height * 0.05 }}>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={{ color: "#59B7FD", fontFamily: "Alata-Regular" }}>
                More {`>`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FundedDetails;

const styles = StyleSheet.create({});
