import React from 'react';
import AppRouter from './src/routes/AppRouter';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider style={locals.container}>
      <AppRouter />
    </SafeAreaProvider>
  );
};

const locals = StyleSheet.create({container: {flex: 1}});

export default App;
