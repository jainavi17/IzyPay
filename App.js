/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {Node} from 'react';

import Footer from './components/Footer';
import {NavigationContainer} from '@react-navigation/native';

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Footer />
    </NavigationContainer>
  );
};

export default App;
