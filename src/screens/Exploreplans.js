import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Images from '../assets/images';
import ImpactPlan from '../components/Exploreplans/ImpactPlans';
import WhatDoes from '../components/Exploreplans/WhatDoes';
import WhyGood from '../components/Exploreplans/WhyGood';
import Logo from '../components/Logo';

const Exploreplans = (props) => {
  return (
    <ScrollView>
      <View style={{ position: 'relative' }}>
        <View>
          <Image source={Images.EXPLORE_PLAN} />
        </View>
        <View
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <View>
            <Logo {...props} backgroundColor={'transparent'} />
          </View>
          <View>
            <WhatDoes />
          </View>
          <View>
            <WhyGood />
          </View>
          <View>
            <ImpactPlan />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exploreplans;

const styles = StyleSheet.create({});
