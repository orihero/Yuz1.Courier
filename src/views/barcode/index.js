import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions} from 'react-native';
import {RNCamera as Camera} from 'react-native-camera';
import CircleButton from '../../components/common/CircleButton';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../constants/styles';

let {height} = Dimensions.get('window');
const Barcode = ({navigation}) => {
  let buttonSize = 60;
  let translateY = new Animated.Value(0);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: height * 0.3 - 20,
          duration: 800,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
        }),
      ]),
    ).start();
  }, [translateY]);
  return (
    <Camera
      style={locals.container}
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      googleVisionBarcodeType={
        Camera.Constants.GoogleVisionBarcodeDetection.BarcodeType.ALL
      }
      trackingEnabled
      onGoogleVisionBarcodesDetected={e => {
        console.warn(e);
      }}>
      <View style={locals.overlay} />
      <View style={locals.indicator}>
        <View style={locals.sideOverlay} />
        <View style={locals.middleIndicator}>
          <Animated.View style={[locals.line, {transform: [{translateY}]}]} />
        </View>
        <View style={locals.sideOverlay} />
      </View>
      <View style={locals.overlay}>
        <CircleButton
          size={buttonSize}
          icon={() => (
            <Entypo name="chevron-thin-left" color={colors.white} size={20} />
          )}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={locals.textContainer(buttonSize)}>
          <Text style={locals.text}>Show the barcodes</Text>
        </View>
      </View>
    </Camera>
  );
};

const locals = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 0.35,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 30,
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: 'transparent',
    flex: 0.3,
    flexDirection: 'row',
  },
  sideOverlay: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 0.2,
  },
  middleIndicator: {
    flex: 0.6,
  },
  textContainer: marginRight => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight,
  }),
  text: {
    color: colors.white,
  },
  line: {
    backgroundColor: 'red',
    height: 2,
    left: 0,
    right: 0,
  },
});

export {Barcode};
