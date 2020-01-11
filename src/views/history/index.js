import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import ActiveItem from '../active/active-item';

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
    status: 'Done',
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
    status: 'Done',
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
    image: 'https://hostel-welcome.ru/wp-content/uploads/2014/09/84628029.jpg',
    name: 'Senor & Senorita ',
    responsible: 'Eshonov Bahosh',
    phone: '+998 99 8970597',
    id: '3d23sgdgl23cx2',
    orderTime: '20.04.2018 9:44',
    deliveryTime: '20.04.2018 9:46',
    quantity: '7 dona',
    summary: '14 220 333 so`m',
    status: 'Done',
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
    image: 'https://hostel-welcome.ru/wp-content/uploads/2014/09/84628029.jpg',
    name: 'Senor & Senorita ',
    responsible: 'Eshonov Bahosh',
    phone: '+998 99 8970597',
    id: '3d23sggls23cx2',
    orderTime: '20.04.2018 9:44',
    deliveryTime: '20.04.2018 9:46',
    quantity: '7 dona',
    summary: '14 220 333 so`m',
    status: 'Done',
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
];

const Active = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={props => <ActiveItem {...props} isHistory={true} />}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Active;
