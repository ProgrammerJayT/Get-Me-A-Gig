import {View, Text} from 'react-native';
import React from 'react';
import Splash from '../screens/Splash';

export default function SplashController({navigation}) {

  setTimeout(() => {
    navigation.navigate('Auth');
  }, 2000);

  return (
    <Splash />
  );
}
