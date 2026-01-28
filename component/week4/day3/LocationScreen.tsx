import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Button, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default function LocationScreen() {
  const watchId = useRef<number | null>(null);

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [tracking, setTracking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1️⃣ Minta izin saat screen dibuka
  useEffect(() => {
    async function requestPermission() {
      if (Platform.OS !== 'android') return;

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        setError('Izin lokasi ditolak');
      }
    }

    requestPermission();
  }, []);

  // 2️⃣ Mulai / hentikan tracking
  useEffect(() => {
    if (!tracking) {
      // stop tracking
      if (watchId.current !== null) {
        Geolocation.clearWatch(watchId.current);
        watchId.current = null;
      }
      return;
    }

    // start tracking
    watchId.current = Geolocation.watchPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      err => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 10,
        timeout: 15000,
      }
    );

    // cleanup saat screen ditutup
    return () => {
      if (watchId.current !== null) {
        Geolocation.clearWatch(watchId.current);
      }
    };
  }, [tracking]);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title={tracking ? 'Stop Tracking' : 'Start Tracking'}
        onPress={() => setTracking(prev => !prev)}
      />

      {location && (
        <Text>
          Lat: {location.latitude}
          {'\n'}
          Lng: {location.longitude}
        </Text>
      )}

      {error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
}
