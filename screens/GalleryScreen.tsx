import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {IPhoto} from '../typings';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {addNewData} from '../components/gallerySlice';
import ModalPhoto from '../components/ModalPhoto';
import GallerySelectBar from '../components/GallerySelectBar';
import GalleryList from '../components/GalleryList';
import colors from '../constants/colors';

const GalleryScreen = () => {
  const photos: IPhoto[] = useAppSelector(state => state.gallery.photos);
  const [imageuri, setImageuri] = useState('');
  const [initSelect, setInitSelect] = useState(false);
  const [modalVisibleStatus, setModalVisibleStatus] = useState(false);
  const styleIfImg = styles.container;
  const styleIfTxt = styles.containerForText;
  const havePhotos = photos.length;
  const dispatch = useAppDispatch();

  const showModalFunction = (visible: boolean, imageURL: string) => {
    //handler to handle the click on image of Grid
    //and close button on modal
    setImageuri(imageURL);
    setModalVisibleStatus(visible);
  };

  const setChecked = (photoId: string) => {
    const newSelected = photos.map(item => {
      if (item.id === photoId) {
        return {...item, selected: !item.selected};
      }
      return item;
    });

    dispatch(addNewData(newSelected));
  };

  const removeSelected = () => {
    const filteredPhotos = photos.filter(photo => photo.selected === false);

    dispatch(addNewData(filteredPhotos));
    setInitSelect(false);
  };

  const modalProps = {
    modalVisibleStatus,
    showModalFunction,
    imageuri,
  };

  const selectBarProps = {setInitSelect, initSelect, removeSelected};

  const galleryListProps = {
    data: photos,
    showModalHandler: showModalFunction,
    checkHandler: setChecked,
    selectHandler: initSelect,
  };

  return (
    <SafeAreaView style={styles.container}>
      {modalVisibleStatus ? (
        <ModalPhoto {...modalProps} />
      ) : (
        <>
          <GallerySelectBar {...selectBarProps} />
          <View style={havePhotos ? styleIfImg : styleIfTxt}>
            {havePhotos ? (
              <GalleryList {...galleryListProps} />
            ) : (
              <Text>No pictures here</Text>
            )}
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryDark,
  },
  containerForText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
