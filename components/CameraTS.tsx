import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import SnapshotBtn from './SnapshotBtn';
import {CameraInitialProps} from '../typings';

export const CameraTS = ({onPicture}: CameraInitialProps) => {
  const [{cameraRef, type, ratio, isRecording}, {takePicture, setIsRecording}] =
    useCamera();

  const cameraPermissions = {
    title: 'Permission to use camera',
    message: 'We need your permission to use your camera',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
  };

  const cameraOptions = {
    quality: 0.85,
    fixOrientation: true, //Android
    forceUpOrientation: true, //IOS
    orientation: 'landscapeLeft',
    pictureOrientation: 1,
    deviceOrientation: 1,
  };

  const takePicture_ = async () => {
    if (!isRecording) {
      try {
        setIsRecording(true);
        const data = await takePicture(cameraOptions);
        onPicture(data);
      } catch (error) {
        console.warn(error);
      } finally {
        setIsRecording(false);
      }
    }
  };

  return (
    <View style={styles.cameraView}>
      <RNCamera
        ref={cameraRef}
        captureAudio={false}
        type={type}
        ratio={ratio}
        style={styles.camera}
        androidCameraPermissionOptions={cameraPermissions}>
        <SnapshotBtn takePicture={takePicture_} />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraView: {
    flex: 1,
  },
  camera: {
    flex: 1,
    padding: 0,
  },
});
