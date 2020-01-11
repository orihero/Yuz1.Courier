import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

let {width, height} = Dimensions.get('window');
const CustomMapView = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{...StyleSheet.absoluteFillObject}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

export {CustomMapView};
