import React from 'react';
import {StyleSheet, View} from 'react-native';

import colors from '../config/colors';
function Icon({
  name: name,
  size = 40,
  backgroundColor = '#000',
  iconColor = colors.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* <Icon name={name} color={iconColor} size={size * 0.5} /> */}
      {/* <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} /> */}
    </View>
  );
}

export default Icon;
