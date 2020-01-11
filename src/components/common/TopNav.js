import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TextInput,
  Animated,
  Platform,
  Easing,
  StyleSheet,
} from 'react-native';
import styles, {colors} from '../../constants/styles';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA from 'react-native-vector-icons/FontAwesome';
import SafeAreaView from 'react-native-safe-area-view';
let AnimatedInput = Animated.createAnimatedComponent(TextInput);
let AnimatedIcon = Animated.createAnimatedComponent(FA);

const TopNav = () => {
  const [width, setWidth] = useState(0);
  const [expanded, setExpanded] = useState(false);
  let searchWidth = new Animated.Value(40);
  let openSearch = () => {
    if (expanded) {
      Animated.timing(searchWidth, {
        toValue: 40,
        easing: Easing.linear,
        duration: 1000,
      }).start(() => {
        setExpanded(!expanded);
      });
    } else {
      Animated.spring(searchWidth, {
        toValue: width - 20,
      }).start(() => {
        setExpanded(!expanded);
      });
    }
  };
  let inputWidth = searchWidth.interpolate({
    inputRange: [40, width ? width - 20 : 40],
    outputRange: [0, width - 80],
  });
  let backgroundColor = searchWidth.interpolate({
    inputRange: [40, width ? width - 20 : 40],
    outputRange: ['rgb(80,205,105)', 'rgb(255,255,255)'],
  });
  let iconColor = searchWidth.interpolate({
    inputRange: [40, width ? width - 20 : 40],
    outputRange: ['rgba(255,255,255,1.0)', 'rgba(80,205,105,0.0)'],
  });
  let reverseColor = searchWidth.interpolate({
    inputRange: [40, width ? width - 20 : 40],
    outputRange: ['rgba(255,255,255,0.0)', 'rgba(80,205,105,1.0)'],
  });
  let paddingRight = searchWidth.interpolate({
    inputRange: [40, width ? width - 20 : 40],
    outputRange: [0, 10],
  });
  return (
    <SafeAreaView style={{backgroundColor: colors.green}}>
      <View style={[styles.row, locals.container]}>
        <View style={[styles.row, {alignItems: 'center'}]}>
          <View style={{width: 40, height: 40, borderRadius: 30}}>
            <Image
              style={{width: 40, height: 40, borderRadius: 30}}
              source={{
                uri: 'https://i.ytimg.com/vi/aEvItEpMly8/maxresdefault.jpg',
              }}
            />
          </View>
          <View style={[styles.row, styles.defaultRadius, locals.avatar]}>
            <FA5 name="coins" color={colors.yellow} size={16} />
            <Text style={{marginLeft: 15, fontSize: 14}}>20</Text>
          </View>
        </View>
        <Animated.View
          onLayout={({nativeEvent}) => {
            if (width === 0) {
              setWidth(nativeEvent.layout.width);
            }
          }}
          style={[
            styles.defaultRadius,
            {flex: 1, alignItems: 'flex-end', paddingRight},
          ]}>
          <TouchableWithoutFeedback onPress={openSearch}>
            <Animated.View
              style={[
                {
                  backgroundColor,
                  width: searchWidth,
                  flexDirection: 'row',
                  alignItems: 'center',
                  ...Platform.select({ios: {padding: 8}}),
                },
                styles.defaultRadius,
              ]}>
              <AnimatedIcon
                name="search"
                size={18}
                style={locals.reverseIcon(iconColor)}
              />
              <AnimatedIcon
                name="arrow-right"
                size={18}
                style={locals.animatedIcon(reverseColor)}
              />
              <AnimatedInput
                returnKeyType="search"
                style={{width: inputWidth}}
                placeholder="Type here..."
                androidUnderlayColor={colors.green}
              />
            </Animated.View>
          </TouchableWithoutFeedback>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const locals = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.green,
    padding: 10,
    paddingRight: 0,
  },
  avatar: {
    backgroundColor: colors.lightYellow,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingHorizontal: 10,
    height: 30,
  },
  animatedIcon: reverseColor => ({
    marginLeft: 10,
    color: reverseColor,
    position: 'absolute',
  }),
  reverseIcon: iconColor => ({marginRight: 15, color: iconColor}),
});

export default TopNav;
