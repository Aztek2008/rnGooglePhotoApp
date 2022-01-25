import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';
import {GalleryState, IPhoto} from '../typings';

const initialState: GalleryState = {
  photos: [],
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    addNewData: (state, action: PayloadAction<IPhoto[]>) => ({
      ...state,
      photos: action.payload,
    }),
  },
});

export const {addNewData} = gallerySlice.actions;

export const selectPhoto = (state: RootState) => state.gallery.photos;

export default gallerySlice.reducer;
