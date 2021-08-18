import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import BottomTabNavigator from './src/Naviagtion/BottomTabNavigation';
import AccountStackNavigator from './src/Naviagtion/AccountStackNavigator';
import AccountNavigator from './src/Naviagtion/AccountNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from './src/components/AccountScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator/>
    </NavigationContainer>
  );
}
