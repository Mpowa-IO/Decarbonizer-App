import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import Images from '../assets/images';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/container';

const DATA = [
  {
    id: '1',
    title: 'BETA TESTERS',
    content:
      'To register for the beta release of this  app, then please visit: ',
    link: 'https://decarbonizer.app/',
  },
  {
    id: '1',
    title: 'INVESTORS & COLLABORATORS',
    content:
      'If you’re interested in working with us, or considering an investment, then please visit:  ',
    // link: ' https://mpowa.io/',
    link: 'https://mpowa.io/',
  },
];

const SocialData = [
  {
    id: '1',
    item: Images.CONTACT_LINK,
    open: 'https://www.linkedin.com/company/mpowa-io/',
  },
  {
    id: '2',
    item: Images.CONTACT_TWITTER,
    open: 'https://twitter.com/decarbonizerapp',
  },
  {
    id: '3',
    item: Images.CONTACT_INSTA,
    open: 'https://www.instagram.com/decarbonizerapp/',
  },
  {
    id: '4',
    item: Images.CONTACT_FB,
    open: 'https://www.facebook.com/decarbonizerapp',
  },
];

const Item = ({title, onPress, content, LinkName, styleItem}) => (
  <View style={styleItem}>
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
    <View>
      <Text style={styles.content}>{content}</Text>
    </View>
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.Links}>{LinkName}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const ContactUs = ({navigation}) => {
  const renderItem = ({item, index}) => (
    <Item
      title={item.title}
      content={item.content}
      LinkName={item.link}
      onPress={() => Linking.openURL(`${item.link}`)}
      styleItem={{marginTop: index === item.length - 1 ? 0 : 30}}
    />
  );
  return (
    <View style={styles.container}>
      <View>
        <Breadcrumbs
          BreadText={'Contact us'}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <ScrollView>
          <Container isPadding style={styles.FlatListStyle}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </Container>
          <View>
            <Container isPadding style={styles.SocialView}>
              {SocialData?.map((item, index) => {
                return (
                  <View style={styles.social}>
                    <TouchableOpacity
                      onPress={() => {
                        Linking.openURL(`${SocialData[index].open}`);
                      }}>
                      <Image source={item.item} />
                    </TouchableOpacity>
                  </View>
                );
              })}
            </Container>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  },
  TextMain: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Alata-Regular',
    paddingTop: 10,
    paddingBottom: 10,
  },
  FlatListStyle: {
    marginTop: 15,
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'Alata-Regular',
    fontSize: 18,
    textTransform: 'uppercase',
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    fontFamily: 'Alata-Regular',
  },
  Links: {
    color: '#A8C634',
    fontSize: 18,
    fontFamily: 'Alata-Regular',
  },
  SocialView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
    backgroundColor: 'rgba(32, 30, 33, 1)',
    paddingTop: 22,
    paddingBottom: 22,
  },
});
