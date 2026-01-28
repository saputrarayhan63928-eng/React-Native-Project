import React, { useState, useEffect } from 'react';
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

import { isSensorAvailable, simplePrompt } from '@sbaiahmed1/react-native-biometrics';

type SensorInfo = {
    available: boolean;        // Whether biometric auth is available
    biometryType?: string;     // Type of biometry ('FaceID', 'TouchID', 'Fingerprint', etc.)
    error?: string;            // Error message if not available
    errorCode?: string;        // Error code if not available (platform-specific)
}

export default function ImagePickerScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [status,setStatus] = useState('Mengecek Sensor....')

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

  useEffect(() => {

        const check = async () => {
            const sensorInfo: SensorInfo = await isSensorAvailable();

            if (sensorInfo.available) {
                if (sensorInfo.biometryType === 'FaceID') {
                    setStatus('Face ID Tersedia');
                  } else {
                    setStatus('Sensor Biometrik Tersedia');
                    handleAuth()
                }
            } else {
                setStatus('Biometrik Tidak Tersedia');
            }
        };
        check();

    }, []);

        const handleAuth = async () => {
        try {
            const { success } = await simplePrompt(
                'Konfirmasi Identitas'
            );

            if (success) {
                Alert.alert('Berhasil', 'Identitas Terverifikasi!');
            } else {
                console.log('User membatalkan atau verifikasi gagal');
            }
        } catch (error) {
            Alert.alert('Error', 'Terjadi kesalahan pada sensor');
        }
    };
  

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