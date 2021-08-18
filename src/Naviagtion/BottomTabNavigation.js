import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNvigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewListingButton from './NewListingButton';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();
const BottomNavigator = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEditScreen"
      component={ListingEditScreen}
      options={({navigation}) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate('ListingEditScreen')}
          />
        ),
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default BottomNavigator;
