import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
// component
import Container from '../components/container';
import Breadcrumbs from '../components/Breadcrumbs';
import Button from '../components/Button';
import TextInput from '../components/TextInput';

// data
import {CA} from '../services/data';
import {strings} from '../components/strings';
import InfoLabel from '../components/InfoLabel';
import Footer from '../components/Footer';
import {height} from '../services/dimensions';

const Yourname = ({navigation}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <KeyboardAwareScrollView style={styles.CreatAccountStyle}>
      <View
        style={{
          alignItems: 'center',
          height: height * 0.95,
          backgroundColor: '#201E21',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.TopItem}>
          <View>
            <Breadcrumbs
              BreadText={strings.Yourname}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.AFew} />
            </Container>
          </View>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', name: ''}}
              onSubmit={values => console.log(values)}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    Label={strings.FirstName}
                    color={'#FFFFFF'}
                    isInput
                  />
                  <TextInput
                    isLabel
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    Label={strings.LastName}
                    color={'#FFFFFF'}
                    style={{marginTop: 5}}
                    isInput
                  />

                  {/* {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )} */}
                  <Button
                    isNormal
                    onPress={() => navigation.navigate('CompanyDetails')}
                    ButtonText={strings.Next}
                    ButtonColor={'#A8C634'}
                    TextColor={'#E5E5E5'}
                    style={{marginTop: 20}}
                  />
                </Container>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  CreatAccountStyle: {
    backgroundColor: '#313131',
    height: height * 1,
  },
  TopItem: {
    backgroundColor: '#313131',
  },
  SocialView: {
    paddingTop: 20,
    paddingBottom: 20,
    height: height * 0.2,
  },
  BottomView: {
    // flex: 0.5,
    paddingTop: 30,
  },
});
export default Yourname;
