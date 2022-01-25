import {StackNavigationProp} from '@react-navigation/stack';
import {GestureResponderEvent} from 'react-native';
import {TakePictureResponse} from 'react-native-camera-hooks/src/takePicture';

export interface IPhoto {
  src: string;
  id: string;
  selected: boolean;
}

export interface GalleryState {
  photos: IPhoto[];
}

export type ShowModalFn = (visible: boolean, src: string) => void;

export type RootStackParamList = {
  Main: undefined;
  Camera: undefined;
  Gallery: undefined;
};

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Camera'
>;

export type ModalPhotoProps = {
  modalVisibleStatus: boolean;
  showModalFunction: ShowModalFn;
  imageuri: string;
};

export type SelectBarProps = {
  setInitSelect: (arg0: boolean) => void;
  initSelect: boolean;
  removeSelected: () => void;
};

export type GalleryListProps = {
  data: IPhoto[];
  showModalHandler: ShowModalFn;
  checkHandler: (event: string) => void;
  selectHandler: boolean;
};

export type GalleryItemProps = {
  item: IPhoto;
  onPress: ShowModalFn;
  setChecked: (event: string) => void;
  initSelect: boolean;
};

export type NavProps = {
  navigation: ProfileScreenNavigationProp;
};

export type UriProps = {
  uri: string;
};

export type StringVoidFn = (event: GestureResponderEvent) => void;
export type VoidFn = () => void;
export type Item = {[key: string]: string};
export type User = {age: string; id: string; name: string};

export type MainTabProps = {
  testID?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  iconName: string;
  children: string;
};

export type SnapProps = {
  takePicture: () => Promise<void>;
};

export type CameraInitialProps = {
  onPicture: (data: TakePictureResponse) => void;
};

// export type ProfileScreenNavigationProp =
//   StackNavigationProp<RootStackParamList>;
