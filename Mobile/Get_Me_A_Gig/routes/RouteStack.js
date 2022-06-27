import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashController from '../controllers/SplashController';

const Stack = createNativeStackNavigator();

function RouteStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashController} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteStack;
