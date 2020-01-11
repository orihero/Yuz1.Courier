import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import styles, {colors} from '../../constants/styles';
import CheckBox from 'react-native-check-box';

const ProductItem = ({item, isHistory}) => {
  const [checked, setChecked] = useState(false);
  let toggleCheckbox = value => {
    setChecked(!checked);
  };
  return (
    <View style={[locals.container, styles.shadow]}>
      <View
        style={[styles.shadow, {margin: 10, backgroundColor: colors.white}]}>
        <Image source={{uri: item.image}} style={locals.image} />
      </View>
      <Text style={locals.mainText}>{item.name}</Text>
      <Text style={locals.defaultText}>{item.weight}</Text>
      <Text style={locals.defaultText}>{item.price}</Text>
      {!isHistory && (
        <CheckBox
          style={{marginRight: 10}}
          onClick={toggleCheckbox}
          isChecked={checked}
        />
      )}
    </View>
  );
};

const locals = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
  mainText: {
    flex: 1,
  },
  defaultText: {
    margin: 15,
  },
});

export default ProductItem;
