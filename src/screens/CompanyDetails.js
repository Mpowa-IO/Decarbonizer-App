import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Picker} from 'react-native';
import {Formik} from 'formik';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import DropDownPicker from 'react-native-dropdown-picker';

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
import {width, height} from '../services/dimensions';

const CompanyDetails = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'item1', value: 'item1'},
    {label: 'item2', value: 'item2'},
  ]);

  const [zIndexMain, SetZindexMain] = useState(false);

  const [indurtyopen, setindurtyOpen] = useState(false);

  const [indurtyItem, SetindurtyItem] = useState([
    {label: 'indurty1', value: 'indurty1'},
    {label: 'indurty2', value: 'indurty2'},
  ]);

  const handleChange = () => {
    SetZindexMain(!zIndexMain);
  };

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
              BreadText={strings.CompanyDetails}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={styles.SocialView}>
            <Container isPadding>
              <InfoLabel Info={strings.CompanyDetailsInfo} />
            </Container>
          </View>
        </View>
        <ScrollView style={{width: '100%'}}>
          <View style={styles.BottomView}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: '', Cpassword: ''}}
              onSubmit={values => console.log(values)}>
              {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                <Container isPadding>
                  <TextInput
                    isLabel
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholderTextColor={'rgba(196, 196, 196, 0.54)'}
                    Label={strings.CompanyDetailsText}
                    color={'#FFFFFF'}
                    isInput
                    style={{marginBottom: 10}}
                  />
                  <View style={{position: 'relative', zIndex: 999}}>
                    <TextInput isLabel Label="Location" />
                    <DropDownPicker
                      open={open}
                      value={value}
                      items={items}
                      translation={{
                        PLACEHOLDER: 'Select Location',
                      }}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      containerStyle={
                        {
                          // width: width * 0.9,
                        }
                      }
                      style={{borderRadius: 2, zIndex: 9}}
                      dropDownContainerStyle={{
                        borderRadius: 2,
                      }}
                      textStyle={{
                        fontFamily: 'Alata-Regular',
                        color: '#434343',
                      }}
                      arrowIconStyle={{
                        tintColor: '#000',
                      }}
                    />
                  </View>
                  <View style={{marginTop: 5, zIndex: 1}}>
                    <TextInput isLabel Label="Industry / category" />
                    <DropDownPicker
                      // indurtyopen, setindurtyOpen
                      // indurtyItem, SetindurtyItem
                      open={indurtyopen}
                      value={value}
                      items={indurtyItem}
                      translation={{
                        PLACEHOLDER: 'Select industry / category',
                      }}
                      setOpen={setindurtyOpen}
                      setValue={setValue}
                      setItems={SetindurtyItem}
                      // containerStyle={{width: width * 0.8}}
                      style={{borderRadius: 2}}
                      dropDownContainerStyle={{
                        borderRadius: 2,
                        zIndex: 22,
                      }}
                      textStyle={{
                        fontFamily: 'Alata-Regular',
                        color: '#434343',
                      }}
                      arrowIconStyle={{
                        tintColor: '#000',
                      }}
                      dropDownDirection={'down'}
                    />
                  </View>
                  <View style={styles.DropDown}></View>

                  {/* {errors.email && (
                    <Text style={{fontSize: 10, color: 'red'}}>
                      {errors.email}
                    </Text>
                  )} */}
                  <Button
                    isNormal
                    onPress={() => navigation.navigate('CompanySize')}
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
  },
  BottomView: {
    // flex: 0.5,
    paddingTop: 30,
  },
  DropDown: {
    marginTop: 10,
  },
});
export default CompanyDetails;
