import React, {useState, useCallback} from 'react';
import {FlatList, RefreshControl, StyleSheet, View, Text} from 'react-native';
import ProductItem from './product-item';
import {colors} from '../../constants/styles';
import {withNavigation} from 'react-navigation';

const SingleProduct = withNavigation(({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  let item = navigation.getParam('item');
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);
  let {products: data} = item || [];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={props => <ProductItem {...props} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(el, i) => i.toString()}
        contentContainerStyle={{paddingBottom: 80}}
      />
      <View style={styles.footer}>
        <View style={styles.leftPill}>
          <Text>Ketayliik</Text>
        </View>
        <View style={styles.midPill}>
          <Text>Ketayliik</Text>
        </View>
        <View style={styles.rightPill}>
          <Text>Ketayliik</Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    left: 0,
    right: 0,
  },
  leftPill: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.green,
    flexDirection: 'row',
  },
  rightPill: {
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.yellow,
    flexDirection: 'row',
  },
  midPill: {
    backgroundColor: colors.red,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});

export default SingleProduct;
