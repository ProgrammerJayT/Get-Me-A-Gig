import {StyleSheet, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';

const Splash = ({imageURL}) => {
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
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        overflow: 'hidden',
        borderRadius: 1000,
        borderColor: '#fff',
        borderWidth: 1,
    }
});
