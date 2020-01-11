import React, { useState } from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  StyleSheet,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import ActiveItem from './active-item';
import styles, { colors } from '../../constants/styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { withNavigation } from 'react-navigation';
import Modal from '../../components/common/Modal';

let data = [
  {
    image:
      'https://www.pngkey.com/png/full/248-2489971_expand-the-possibilities-of-your-business-small-business.png',
    name: 'Senor & Senorita ',
    responsible: 'Eshonov Bahosh',
    phone: '+998 99 8970597',
    id: '3d23sggl23vcx2',
    orderTime: '20.04.2018 9:44',
    deliveryTime: '20.04.2018 9:46',
    quantity: '7 dona',
    summary: '14 220 333 so`m',
    products: [
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
    ],
  },
  {
    image:
      'https://benefis.uz/wp-content/uploads/2018/10/3d90031427bf6c0f74e6b2db7d5dc325-1.jpg',
    name: 'Senor & Senorita ',
    responsible: 'Eshonov Bahosh',
    phone: '+998 99 8970597',
    id: '3d23sggl2a3cx2',
    orderTime: '20.04.2018 9:44',
    deliveryTime: '20.04.2018 9:46',
    quantity: '7 dona',
    summary: '14 220 333 so`m',
    products: [
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
    ],
  },
  {
    image: 'https://hostel-welcome.ru/wp-content/uploads/2014/09/84628029.jpg',
    name: 'Senor & Senorita ',
    responsible: 'Eshonov Bahosh',
    phone: '+998 99 8970597',
    id: '3d23sgdgl23cx2',
    orderTime: '20.04.2018 9:44',
    deliveryTime: '20.04.2018 9:46',
    quantity: '7 dona',
    summary: '14 220 333 so`m',
    products: [
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
    ],
  },
  {
    image: 'https://hostel-welcome.ru/wp-content/uploads/2014/09/84628029.jpg',
    name: 'Senor & Senorita ',
    responsible: 'Eshonov Bahosh',
    phone: '+998 99 8970597',
    id: '3d23sggls23cx2',
    orderTime: '20.04.2018 9:44',
    deliveryTime: '20.04.2018 9:46',
    quantity: '7 dona',
    summary: '14 220 333 so`m',
    products: [
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
      {
        image:
          'https://9to5mac.com/wp-content/uploads/sites/6/2018/08/public-beta1.jpg?quality=82&strip=all&w=1600',
        weight: '20 pcs',
        name: 'Apples',
        price: '20 x 8000 USD',
      },
      {
        image:
          'https://www.brandchannel.com/wp-content/uploads/2018/11/unilever-baby-dove-personalized.jpg',
        weight: '110 pcs',
        name: 'Shampun',
        price: '110 x 8000 UZS',
      },
    ],
  },
];

const Active = withNavigation(({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);
  return (
    <View style={locals.container}>
      <FlatList
        data={data}
        renderItem={props => <ActiveItem {...props} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
      <View style={locals.footer}>
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate('Barcode');
          }}>
          <View style={locals.circleBtn}>
            <Icon name="barcode-scan" size={32} color={colors.white} />
          </View>
        </TouchableWithoutFeedback>
      </View>
      {refreshing && <Modal isOpen={refreshing} >
        <View style={{ padding: 30, backgroundColor: colors.white }}>
          <Text>WTF</Text>
        </View>
      </Modal>}
    </View>
  );
});

const locals = StyleSheet.create({
  container: {},
  footer: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  circleBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    ...styles.shadow,
  },
});

export default Active;
