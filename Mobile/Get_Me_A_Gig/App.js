import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import RouteStack from './routes/RouteStack';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <RouteStack />
      <StatusBar backgroundColor={'#000'}/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
