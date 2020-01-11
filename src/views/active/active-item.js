import React from 'react';
import {
  View,
  Image,
  Text as RnText,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import styles, {colors} from '../../constants/styles';
import locales from '../../constants/locales';
import {withNavigation} from 'react-navigation';

let {width: wWidth} = Dimensions.get('window');

const ActiveItem = ({item, navigation, isHistory}) => {
  let {status} = item;
  let outerMargin = status ? 10 : 0;
  let margin = status ? 0 : 10;
  let padding = 10;
  let width = 0.4 * (wWidth - margin * 2 - padding * 3);
  let Text = ({style, children, ...rest}) => (
    <RnText numberOfLines={1} style={[style, {fontSize: status ? 10 : 12}]}>
      {children}
    </RnText>
  );
  return (
    <>
      <View style={[styles.row, {flex: 1, margin: outerMargin}]}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('CustomMapView');
          }}>
          <View
            style={[
              {
                flex: 0.4,
                backgroundColor: colors.white,
                padding,
                margin,
                marginRight: 0,
                marginBottom: 0,
              },
              styles.shadow,
              styles.centeredContainer,
            ]}>
            <Image
              resizeMode={'center'}
              source={{uri: item.image}}
              style={{width, height: width}}
            />
            <Text style={{fontWeight: 'bold'}} numberOfLines={1}>
              {item.name}
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Products', {
              item,
              isHistory,
            });
          }}>
          <View
            style={[
              {
                flex: 0.6,
                backgroundColor: colors.white,
                margin,
                justifyContent: 'space-between',
                padding,
                marginBottom: 0,
              },
              styles.shadow,
            ]}>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text style={{fontWeight: 'bold'}}>{locales.orderId}:</Text>
              <Text style={{color: colors.green, fontWeight: 'bold'}}>
                {item.id}
              </Text>
            </View>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text>{locales.responsible}</Text>
              <Text style={{color: colors.green}}>{item.responsible}</Text>
            </View>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text>{locales.phone}:</Text>
              <Text style={{color: colors.green}}>{item.phone}</Text>
            </View>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text>{locales.orderTime}:</Text>
              <Text style={{color: colors.green}}>{item.orderTime}</Text>
            </View>
            {isHistory && (
              <View style={[styles.row, {justifyContent: 'space-between'}]}>
                <Text>{locales.deliveryTime}:</Text>
                <Text style={{color: colors.green}}>{item.deliveryTime}</Text>
              </View>
            )}
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text>{locales.orderQuantity}:</Text>
              <Text style={{color: colors.green}}>{item.quantity}</Text>
            </View>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <Text>{locales.orderSummary}:</Text>
              <Text style={{color: colors.green}}>{item.summary}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

export default withNavigation(ActiveItem);
