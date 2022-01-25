import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SelectBarProps} from '../typings';
import colors from '../constants/colors';

const GallerySelectBar = (props: SelectBarProps) => {
  const {setInitSelect, initSelect, removeSelected} = props;

  return (
    <View style={initSelect ? selectBarInitial : selectBarSelecting}>
      {initSelect && (
        <Pressable style={styles.button} onPress={removeSelected}>
          <Icon name={'trash-o'} size={25} color={colors.primaryLight} />
        </Pressable>
      )}
      <Pressable
        style={styles.button}
        onPress={() => setInitSelect(!initSelect)}>
        <Text style={styles.btnText}>Select</Text>
      </Pressable>
    </View>
  );
};

export default GallerySelectBar;

const styles = StyleSheet.create({
  defaultBar: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    height: 40,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
  },
  selectBarInitial: {
    justifyContent: 'space-between',
  },
  selectBarSelecting: {
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 5,
    textAlign: 'center',
  },
  btnText: {
    color: colors.primaryLight,
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

const selectBarInitial = StyleSheet.flatten([
  styles.defaultBar,
  styles.selectBarInitial,
]);

const selectBarSelecting = StyleSheet.flatten([
  styles.defaultBar,
  styles.selectBarSelecting,
]);
