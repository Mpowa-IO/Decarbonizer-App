import React from 'react';
import { View, Text, Image } from 'react-native';
import { height, width } from '../../services/dimensions';
import Images from '../../assets/images';

const data = [
  {
    title: 'Bronze impact',
    content:
      'Not sure about?   Dip toe in the water and start your impact.  The price of less than two coffees per month.',
    price: '$4.99/mo',
    isTrue: false,
    backgroundColor: '#AF8958',
  },
  {
    title: 'Silver impact',
    content: 'Double up and make a bigger impact.  Learn more about the benefits before you commit.',
    price: '$9.99/mo',
    isTrue: true,
    backgroundColor: '#D7D7D7',
  },
  {
    title: 'Gold impact',
    content: 'Our gold standard is less than $15 per month and gives you 3 x the impact of our Bronze plan.',
    price: '$14.99/mo',
    isTrue: false,
    backgroundColor: '#CAB037',
  },
  {
    title: 'Your impact',
    content:
      'Want to customise your impact and set a price to suit your budget, big or small.  For as little as $1/mo to unlimited.  It all helps.',
    price: '$?',
    isTrue: false,
    backgroundColor: '#A8C634',
  },
];

const ImpactPlan = () => {
  return (
    <View style={{ marginTop: height * 0.05 }}>
      <View>
        <Text
          style={{
            fontSize: 28,
            fontFamily: 'Alata-Regular',
            color: '#fff',
            textAlign: 'center',
            marginBottom: height * 0.05,
          }}
        >
          ESG Impact Plans
        </Text>
      </View>
      <View style={{ marginRight: 15, marginLeft: 15 }}>
        {data?.map((item, index) => {
          return (
            <View
              style={{
                marginBottom: 20,
                backgroundColor: item.backgroundColor,
                padding: 15,
                borderRadius: 6,
                position: 'relative',
              }}
            >
              {item.isTrue == true ? (
                <View style={{ position: 'absolute', right: width * 0.05, top: height * 0.01 }}>
                  <Text style={{ color: '#348DCF', fontFamily: 'Alata-Regular' }}>Recommended</Text>
                </View>
              ) : null}
              <View>
                <Text style={{ fontSize: 22, fontFamily: 'Alata-Regular', color: '#000' }}>{item.title}</Text>
              </View>
              <View>
                <Text style={{ fontSize: 14, fontFamily: 'Alata-Regular', color: '#000' }}>
                  {item.content}
                </Text>
              </View>
              <View>
                <Text
                  style={{ fontSize: 24, fontFamily: 'Alata-Regular', textAlign: 'right', color: '#000' }}
                >
                  {item.price}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ImpactPlan;
