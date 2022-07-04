import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { height, width } from '../../services/dimensions';
import Images from '../../assets/images';

const data = [
  {
    title: 'Choose where you create impact',
    Content: `We know it is important to keep your impact in line with your personal values.  You might even have a personal connection to the cause.

Our innovative, community-driven model (known as a DAO), means that you get to vote which projects are invested in, in proportion to your subscription contribution.
      
We believe this amplifies and transforms your impact beyond mere charity.  We call this micro-philanthropy. `,
    active: true,
  },
  {
    title: 'Strategic impact - causes not symptoms',
    Content: `We know it is important to keep your impact in line with your personal values.  You might even have a personal connection to the cause.

Our innovative, community-driven model (known as a DAO), means that you get to vote which projects are invested in, in proportion to your subscription contribution.
      
We believe this amplifies and transforms your impact beyond mere charity.  We call this micro-philanthropy. `,
    active: true,
  },
  {
    title: 'Transparency, trust, and traceability',
    Content: `We know it is important to keep your impact in line with your personal values.  You might even have a personal connection to the cause.

Our innovative, community-driven model (known as a DAO), means that you get to vote which projects are invested in, in proportion to your subscription contribution.
      
We believe this amplifies and transforms your impact beyond mere charity.  We call this micro-philanthropy. `,
    active: true,
  },
  {
    title: 'Governance - the power of the DAO',
    Content: `We know it is important to keep your impact in line with your personal values.  You might even have a personal connection to the cause.

Our innovative, community-driven model (known as a DAO), means that you get to vote which projects are invested in, in proportion to your subscription contribution.
          
We believe this amplifies and transforms your impact beyond mere charity.  We call this micro-philanthropy. `,
    active: true,
  },
];

const WhyGood = () => {
  const [currentIndex, setCurrentIndex] = React.useState(null);

  return (
    <View>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Alata-Regular',
            color: '#fff',
            textAlign: 'center',
            marginTop: height * 0.04,
          }}
        >
          Why it’s good
        </Text>
      </View>
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          backgroundColor: 'white',
          borderRadius: 5,
          marginTop: height * 0.02,
        }}
      >
        {data?.map((item, index) => {
          return (
            <View key={index + 1}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 15,
                  borderBottomColor: '#D1D1D6',
                  borderBottomWidth: 1,
                }}
                onPress={() => {
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
              >
                <View>
                  <Text
                    ellipsizeMode='tail'
                    numberOfLines={2}
                    style={{ fontFamily: 'Alata-Regular', color: '#2E2E2E' }}
                  >
                    {item.title}
                  </Text>
                </View>
                <View>
                  {index === currentIndex ? (
                    <Image source={Images.ARROW_UP_PLAN} />
                  ) : (
                    <Image source={Images.ARROW_UP_DOWN} />
                  )}
                </View>
              </TouchableOpacity>

              {index === currentIndex && (
                <View style={{ marginLeft: 10, marginRight: 10, paddingLeft: 7, paddingRight: 7 }}>
                  <Text style={{ fontSize: 14, fontFamily: 'Alata-Regular', color: '#2E2E2E' }}>
                    {item.Content}
                  </Text>
                </View>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default WhyGood;
