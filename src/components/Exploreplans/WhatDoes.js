import React from 'react';
import { View, Text, Image } from 'react-native';
import { height, width } from '../../services/dimensions';
import Images from '../../assets/images';

const WhatDoes = () => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 28, fontFamily: 'Alata-Regular', color: '#fff', textAlign: 'center' }}>
          What it does
        </Text>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 5,
          marginTop: height * 0.02,
        }}
      >
        <View>
          <Text style={{ fontSize: 20, color: '#2E2E2E', fontFamily: 'Alata-Regular' }}>
            The positive impact of crowds
          </Text>
          <Text style={{ fontSize: 16, fontFamily: 'Alata-Regular', color: '#000' }}>
            Decarbonizer amplifies your ESG impact, providing the ability to move beyond simple giving. We
            call this concept micro-philanthropy.
          </Text>
        </View>
        <View
          style={{
            marginTop: height * 0.02,

            width: '100%',
          }}
        >
          <Text style={{ color: '#2E2E2E', fontFamily: 'Alata-Regular', fontSize: 20 }}>Categories</Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: height * 0.02,
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Image source={Images.ENERGY} />
            </View>
            <View>
              <Image source={Images.WATER} />
            </View>
            <View>
              <Image source={Images.FOOD} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WhatDoes;
