import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons';
import AppButton from '../components/AppButton';

function StylesSection(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <AppButton title="Login"></AppButton>
      <Icon name="email" size={100} color="dodgerblue" />
      {/* <MaterialCommunityIcons name="email" size={100} color="dodgerblue" /> */}
    </View>
  );
}

export default StylesSection;
