import * as React from 'react';
import {Text, View, Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import SignIn from '../../screens/SignIn';

import Images from '../../assets/images';
import ExtraMenu from '../../screens/ExtraMenu';
import FundingStage from '../../screens/FundingStage';
import Wallet from '../../screens/Wallet';
import Category from '../../screens/Category';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7700EC',

        tabBarStyle: {
          paddingTop: 30,
          paddingBottom: Platform.OS === 'android' ? 10 : 20,
          height: Platform.OS === 'android' ? 80 : 120,
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#000',
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
              }}>
              {focused ? (
                <Image source={Images.ACTIVE_HOME_BOTTOM_IMG} />
              ) : (
                <Image source={Images.HOME_BOTTOM_IMG} />
              )}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="FundingStage"
        component={FundingStage}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
              }}>
              {focused ? (
                <Image source={Images.ACTIVE_WORK_BOTTOM} />
              ) : (
                <Image source={Images.WORK_BOTTOM} />
              )}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
              }}>
              {focused ? (
                <Image source={Images.ACTIVE_CATE_BOTTOM_IMG} />
              ) : (
                <Image source={Images.CATE_BOTTOM_IMG} />
              )}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />

      <Tab.Screen
        name="YouCarbon"
        component={Wallet}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
              }}>
              {focused ? (
                <Image source={Images.ACTIVE_WALLET_CATE_BOTTOM_IMG} />
              ) : (
                <Image source={Images.WALLET_CATE_BOTTOM_IMG} />
              )}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ExtraMenu"
        component={ExtraMenu}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 45,
                height: 45,
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: 20,
              }}>
              {focused ? (
                <Image source={Images.ACTIVE_MORE_IMG} />
              ) : (
                <Image source={Images.MORE_IMG} />
              )}
            </View>
          ),

          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
