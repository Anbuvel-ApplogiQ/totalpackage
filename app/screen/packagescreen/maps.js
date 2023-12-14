import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Maps = () => {
  const [mapError, setMapError] = useState(null);

  const handleMapError = (error) => {
    console.error('Map Error:', error);
    setMapError('Error loading the map. Please check your configuration and try again.');
  };

  return (
    <View style={styles.container}>
      {mapError ? (
        <Text style={styles.errorText}>{mapError}</Text>
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          onMapReady={() => setMapError(null)}
          onError={handleMapError}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default Maps;
