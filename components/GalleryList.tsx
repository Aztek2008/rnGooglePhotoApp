import {FlatList} from 'react-native';
import React from 'react';
import {GalleryListProps} from '../typings';
import GalleryItem from './GalleryItem';

const GalleryList = ({
  data,
  showModalHandler,
  checkHandler,
  selectHandler,
}: GalleryListProps) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => (
        <GalleryItem
          item={item}
          onPress={showModalHandler}
          setChecked={checkHandler}
          initSelect={selectHandler}
        />
      )}
      numColumns={3}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default GalleryList;
