import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import {ModalPhotoProps} from '../typings';
import colors from '../constants/colors';

const ModalPhoto = (props: ModalPhotoProps) => {
  const {modalVisibleStatus, showModalFunction, imageuri} = props;
  return (
    <Modal
      transparent={false}
      animationType={'fade'}
      visible={modalVisibleStatus}
      onRequestClose={() => {
        showModalFunction(!modalVisibleStatus, '');
      }}>
      <View style={styles.modelStyle}>
        <FastImage
          style={styles.fullImageStyle}
          source={{uri: imageuri}}
          resizeMode={FastImage.resizeMode.contain}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.closeButtonStyle}
          onPress={() => {
            showModalFunction(!modalVisibleStatus, '');
          }}>
          <Icon name={'close'} size={35} color={colors.primaryLight} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalPhoto;

const styles = StyleSheet.create({
  fullImageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '98%',
    resizeMode: 'contain',
  },
  closeButtonStyle: {
    width: 35,
    height: 35,
    top: 50,
    right: 20,
    position: 'absolute',
  },
  modelStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
  },
});
