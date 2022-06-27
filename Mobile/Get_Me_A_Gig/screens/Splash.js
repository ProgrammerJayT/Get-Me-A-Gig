import {StyleSheet, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <SafeAreaView style = {styles.body}>
      <Image source = {require('../res/images/logo.png')} style = {styles.image} />
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
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width,
    }
});
