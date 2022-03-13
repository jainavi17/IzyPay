/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = props => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#38A0FF"
      inactiveColor="#CCCCCC"
      screenOptions={{tabBarShowLabel: false, headerShown: false}}
      barStyle={{paddingBottom: 24}}
      tabBarLabel={() => {
        return null;
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Footer;
