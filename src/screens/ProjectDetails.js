import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import Project from '../components/Project';
import Share from '../components/Share';

const ProjectDetails = props => {
  const {navigation} = props;

  const [enabled, setEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <View>
        <Logo {...props} />
      </View>
      <ScrollView nestedScrollEnabled={true} scrollEnabled={enabled}>
        <View>
          <Project {...props} setEnabled={setEnabled} />
        </View>
        <View>
          <Share />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProjectDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  },
});
