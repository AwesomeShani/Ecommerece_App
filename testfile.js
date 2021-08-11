import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome';

export default function Testfile() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!</Text>
      <Icon name="trash-can-outline" size={30} color="#900" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});
