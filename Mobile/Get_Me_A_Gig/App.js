import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import RouteStack from './routes/RouteStack';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <RouteStack />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
});
