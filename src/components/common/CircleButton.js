import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../../constants/styles';

const CircleButton = ({
  backgroundColor = colors.darkGray,
  size = 40,
  icon: Icon,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback {...{onPress}}>
      <View
        style={[
          styles.container,
          {backgroundColor, width: size, height: size, borderRadius: size / 2},
        ]}>
        <Icon />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default CircleButton;
