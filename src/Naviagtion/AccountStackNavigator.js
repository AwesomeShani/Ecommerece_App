import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountScreen from '../components/AccountScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Stack = createNativeStackNavigator();
const AccountStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountStackNavigator;
