import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import CheckBox from '@react-native-community/checkbox';
import {GalleryItemProps} from '../typings';
import colors from '../constants/colors';

const GalleryItem = ({
  item,
  onPress,
  setChecked,
  initSelect,
}: GalleryItemProps) => {
  return (
    <View style={styles.imageContainerStyle}>
      <TouchableOpacity
        key={item.id}
        style={{flex: 1}}
        onPress={() => {
          onPress(true, item.src);
        }}>
        <FastImage
          style={styles.imageStyle}
          source={{
            uri: item.src,
          }}
        />
        {initSelect && (
          <CheckBox
            disabled={false}
            value={item.selected}
            onValueChange={() => setChecked(item.id)}
            style={styles.checkbox}
            tintColors={{true: colors.primaryDark, false: colors.primaryLight}}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default GalleryItem;

const styles = StyleSheet.create({
  imageStyle: {
    height: 120,
    width: '100%',
  },
  imageContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  checkbox: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
});
