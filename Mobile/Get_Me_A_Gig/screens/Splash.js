import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <SafeAreaView style = {styles.body}>
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
