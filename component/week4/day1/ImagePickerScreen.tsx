import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

import {
  requestCameraPermission,
  requestGalleryPermission,
} from './permissions';

export default function ImagePickerScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);

  function handleResponse(response: ImagePickerResponse) {
    if (response.didCancel) return;

    if (response.errorCode) {
      Alert.alert('Error', response.errorMessage || 'Image picker error');
      return;
    }

    const asset = response.assets?.[0];
    if (!asset?.uri) return;

    setImageUri(asset.uri);
  }

  async function openCamera() {
    const granted = await requestCameraPermission();
    if (!granted) {
      Alert.alert('Permission denied', 'Camera permission is required');
      return;
    }

    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.7,
        maxWidth: 1024,
        maxHeight: 1024,
      },
      handleResponse
    );
  }

  async function openGallery() {
    const granted = await requestGalleryPermission();
    if (!granted) {
      Alert.alert('Permission denied', 'Gallery permission is required');
      return;
    }

    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        quality: 0.7,
        maxWidth: 1024,
        maxHeight: 1024,
      },
      handleResponse
    );
  }

  return (
    <View style={styles.container}>
      <Button title="Ambil Foto (Camera)" onPress={openCamera} />
      <View style={styles.spacer} />
      <Button title="Pilih dari Galeri" onPress={openGallery} />

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  spacer: {
    height: 12,
  },
  image: {
    marginTop: 24,
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: 'center',
  },
});