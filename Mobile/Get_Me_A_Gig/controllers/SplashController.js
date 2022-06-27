import {View, Text} from 'react-native';
import React from 'react';
import Splash from '../screens/Splash';

export default function SplashController({navigation}) {

  const imageURL = '../res/images/logo.png';
  return (
    <Splash imageURL = {imageURL} />
  );
}
