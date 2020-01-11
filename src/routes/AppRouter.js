import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Home,
  Login,
  CustomMapView,
  Products,
  Barcode,
  SingleProduct,
} from '../views/index';
import TopNav from '../components/common/TopNav';

let homeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: <TopNav />,
    },
  },
  Products: {
    screen: Products,
    navigationOptions: {
      header: <TopNav />,
    },
  },
  SingleProduct: {
    screen: SingleProduct,
    navigationOptions: {
      header: <TopNav />,
    },
  },
  CustomMapView: {
    screen: CustomMapView,
    navigationOptions: {
      header: null,
    },
  },
  Barcode: {
    screen: Barcode,
    navigationOptions: {
      header: null,
    },
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    HomeStack: {
      screen: homeStack,
    },
  },
  {initialRouteName: 'HomeStack'},
);

export default createAppContainer(AppNavigator);
