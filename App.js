/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {Node} from 'react';

import BottomTabNavigator from './components/BottomTabNavigator';
import {NavigationContainer} from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
