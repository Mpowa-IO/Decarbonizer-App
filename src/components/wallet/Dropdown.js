import React, { FC, ReactElement, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { height } from "../../services/dimensions";

export default function Dropdown(props) {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);
  const [menu, setMenu] = useState("");
  const { label, data, onSelect, setValueNew, setRouteNew } = props;

  console.log("this is props from dropdown", props);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setMenu(item.label);
    setSelected(item);
    onSelect(item);
    setVisible(false);
    setValueNew(item.label);
    setRouteNew(item.route);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text style={{ color: "#fff", textAlign: "left" }}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <LinearGradient
                colors={["#1B1B1B", "#323232"]}
                style={{
                  borderRadius: 24,
                  position: "relative",
                  height: height * 0.2,
                }}
              >
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </LinearGradient>
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}

      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: "left",
    color: "#fff",
    fontSize: 18,
    fontFamily: "Abel-Regular",
    paddingLeft: 20,
  },
  icon: {
    marginRight: 10,
  },
  dropdown: {
    position: "absolute",
    // backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000000",
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: height * -0.09,
    overflow: "hidden",
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
