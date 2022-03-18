import React from 'react';

import Home from './components/Home';
import SendScreen from './components/SendScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SendScreen" component={SendScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
