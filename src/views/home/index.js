import React, {useReducer} from 'react';
import {Dimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Active from '../active/index';
import History from '../history/index';
import locales from '../../constants/locales';
import {colors} from '../../constants/styles';

export const Home = ({navigation}) => {
  let reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE':
        return {...state, index: action.index};
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    index: 0,
    routes: [
      {
        key: 'active',
        title: locales.active,
      },
      {
        key: 'history',
        title: locales.history,
      },
    ],
  });
  return (
    <TabView
      navigationState={state}
      renderScene={SceneMap({
        active: Active,
        history: History,
      })}
      renderTabBar={props => (
        <TabBar
          style={{backgroundColor: colors.white}}
          labelStyle={{fontSize: 12}}
          {...props}
          activeColor={colors.green}
          inactiveColor={colors.black}
        />
      )}
      onIndexChange={index => dispatch({type: 'CHANGE', index})}
      initialLayout={{width: Dimensions.get('window').width}}
      swipeEnabled={true}
    />
  );
};
