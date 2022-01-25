import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';
import {RootStackParamList, MainTabProps, NavProps} from '../typings';

const MainScreen = ({navigation}: NavProps) => {
  const navigateTo = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  const Tab = ({testID, onPress, iconName, children}: MainTabProps) => {
    return (
      <TouchableOpacity style={styles.button} testID={testID} onPress={onPress}>
        <View style={styles.buttonText}>
          <Icon name={iconName} size={50} color={colors.primaryDark} />
          <Text>{children}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Tab
        testID="cameraBtn"
        onPress={() => navigateTo('Camera')}
        iconName="camera"
        children="Camera"
      />
      <Tab
        testID="galleryBtn"
        onPress={() => navigateTo('Gallery')}
        iconName="photo"
        children="Gallery"
      />
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '50%',
    paddingTop: '50%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  buttonText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
