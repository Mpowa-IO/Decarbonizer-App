import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Logo from '../components/Logo';
import OurPlanDetails from '../components/OurPlanDetails';

const OurPlan = (props) => {
  const { navigation } = props;
  return (
    <View>
      <View>
        <Logo {...props} isArrow backgroundColor={'#181818'} />
      </View>
      <View>
        <ScrollView nestedScrollEnabled={true}>
          <OurPlanDetails />
          <View style={{ paddingBottom: 100 }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default OurPlan;

const styles = StyleSheet.create({});
