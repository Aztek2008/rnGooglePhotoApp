import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import GalleryScreen from '../screens/GalleryScreen';
import CameraScreen from '../screens/CameraScreen';
import MainScreen from '../screens/MainScreen';
import appColors from '../constants/colors';
import {RootStackParamList} from '../typings';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const NavBar = () => {
  return (
    <Navigator initialRouteName="Main">
      <Screen name="Main" component={MainScreen} options={headerOptions} />
      <Screen name="Camera" component={CameraScreen} options={headerOptions} />
      <Screen
        name="Gallery"
        component={GalleryScreen}
        options={headerOptions}
      />
    </Navigator>
  );
};

const headerOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: appColors.primaryDark,
  },
  headerTintColor: appColors.primaryLight,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default NavBar;
