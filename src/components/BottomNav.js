import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Images from '../assets/images';

const data = [
  {
    image: Images.HOME_BOTTOM_IMG,
    activeIcon: Images.ACTIVE_HOME_BOTTOM_IMG,
    path: 'Home',
    name: 'Home',
  },
  {
    image: Images.WORK_BOTTOM,
    activeIcon: Images.ACTIVE_WORK_BOTTOM,
    path: 'FundingStage',
    name: 'Home1',
  },
  {
    image: Images.CATE_BOTTOM_IMG,
    activeIcon: Images.ACTIVE_CATE_BOTTOM_IMG,
    path: 'Home',
    name: 'Home2',
  },
  {
    image: Images.WALLET_CATE_BOTTOM_IMG,
    activeIcon: Images.ACTIVE_WALLET_CATE_BOTTOM_IMG,
    path: 'Home',
    name: 'Home3',
  },
  {
    image: Images.MORE_IMG,
    path: 'ExtraMenu',
    activeIcon: Images.ACTIVE_MORE_IMG,
    name: 'Home4',
  },
];

const BottomNav = ({navigation}) => {
  const [toggle, setToggle] = React.useState(false);

  const handlePress = item => {
    console.log(item, 'item flag');
    setToggle(item);
  };

  return (
    <View
      style={{
        position: 'absolute',
        backgroundColor: '#000',
        height: 81,
        width: '100%',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
      }}>
      {data.map((item, index) => {
        return (
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(item.path), handlePress(item.name);
              }}
              style={{
                height: 40,
                width: 40,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {toggle === item.name ? (
                <Image source={item.activeIcon} />
              ) : (
                <Image source={item.image} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
