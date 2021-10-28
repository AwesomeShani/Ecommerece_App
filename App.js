import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import BottomTabNavigator from './src/Naviagtion/BottomTabNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AuthNavigator from './src/Naviagtion/AuthNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
