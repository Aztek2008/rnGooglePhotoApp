import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import appColors from '../constants/colors';
import {SnapProps} from '../typings';

const SnapshotBtn = ({takePicture}: SnapProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.btnAlignment}
      onPress={takePicture}>
      <Icon name="camera" size={50} color={appColors.primaryLight} />
    </TouchableOpacity>
  );
};

export default SnapshotBtn;

const styles = StyleSheet.create({
  btnAlignment: {
    position: 'absolute',
    top: '80%',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
