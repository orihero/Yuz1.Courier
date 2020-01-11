import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles, {colors} from '../../constants/styles';
import MA from 'react-native-vector-icons/MaterialIcons';
import FA from 'react-native-vector-icons/FontAwesome';
import locales from '../../constants/locales';

const Header = () => {
  return (
    <View style={[styles.row, {padding: 15, alignItems: 'center'}]}>
      <View
        style={[
          styles.row,
          {
            borderBottomWidth: 1,
            borderColor: colors.green,
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1,
            marginRight: 10,
          },
        ]}>
        <TextInput
          underlineColorAndroid={colors.transparent}
          placeholder={locales.search}
          style={{fontSize: 16}}
        />
        <FA name="search" color={colors.green} size={18} />
      </View>
      <MA name="filter-list" color={colors.green} size={30} />
    </View>
  );
};

export default Header;
