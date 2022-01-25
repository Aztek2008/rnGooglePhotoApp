/**
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {NavigationContainer} from '@react-navigation/native';
import colors from '../constants/colors';
import {StatusBar} from 'react-native';
import NavBar from './NavBar';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.primaryDark} />
      <NavigationContainer>
        <NavBar />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
