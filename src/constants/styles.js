import React from 'react';
import {StyleSheet} from 'react-native';

export const colors = {
  green: '#50CC69',
  white: '#fff',
  black: '#000',
  gray: '#89918A',
  darkGray: '#606B62',
  lightGray: '#F5F5F5',
  red: '#FB5F5F',
  lightYellow: '#CBE893',
  yellow: '#F7FF00',
  transparent: 'transparent',
};

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  systemText: {
    fontSize: 22,
    color: colors.green,
    paddingVertical: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultText: {
    color: colors.gray,
    fontSize: 16,
    padding: 10,
  },
  horizontalMargin: {
    marginHorizontal: 50,
    marginBottom: 10,
  },
  verticalMargin: {
    marginVertical: 15,
  },
  defaultShape: {
    height: 55,
  },
  defaultRadius: {
    borderRadius: 15,
  },
  buttonPadding: {
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  shadow: {
    elevation: 5,
    shadowColor: colors.black,
    shadowOpacity: 0.33,
    shadowOffset: {
      x: 0,
      y: 5,
    },
  },
  buttonText: {
    color: colors.green,
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 10,
  },
});
