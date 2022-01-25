import React, {useEffect, useState} from 'react';
import {addNewData} from '../components/gallerySlice';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {CameraTS} from '../components/CameraTS';
import {useAppDispatch} from '../store/hooks';
import appColors from '../constants/colors';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import {IPhoto, UriProps} from '../typings';

const CameraScreen = () => {
  const dispatch = useAppDispatch();
  const [snapshots, setSnapshots] = useState<IPhoto[]>([]); //snapshots uris component storage

  useEffect(() => {
    dispatch(addNewData(snapshots)); // Save pictures uris to global state
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snapshots]);

  const onPicture = ({uri}: UriProps) => {
    const photoObject = {
      src: uri,
      id: uuidv4(),
      selected: false,
    };

    setSnapshots(prev => [...prev, photoObject]); // Save snapshots uris to component state
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <CameraTS onPicture={onPicture} />
      </SafeAreaView>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.primaryDark,
  },
  safeArea: {flex: 1},
});
