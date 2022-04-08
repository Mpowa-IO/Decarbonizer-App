import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Images from '../assets/images';
import Container from '../components/container';
import Logo from '../components/Logo';
import FundingDetails from '../components/FundingDetails';

const FundingStage = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View>
        <Logo {...props} />
      </View>
      <View style={styles.HomeFilter}>
        <Container>
          <View style={styles.FilterMain}>
            <View>
              <Text style={styles.Text}>Projects at funding stage</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  width: 40,
                  alignItems: 'center',
                }}>
                <Image source={Images.FILTER} />
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </View>
      <ScrollView nestedScrollEnabled={true}>
        <FundingDetails {...props} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
  HomeFilter: {
    backgroundColor: '#2E2E2E',
  },
  FilterMain: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    justifyContent: 'space-between',
    padding: 15,
  },

  Text: {
    color: '#fff',
    fontFamily: 'Alata-Regular',
    textTransform: 'uppercase',
  },
});
export default FundingStage;
