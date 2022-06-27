import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashController from '../controllers/SplashController';
import AuthController from '../controllers/AuthController';

const Stack = createNativeStackNavigator();

function RouteStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
        }
      }>
        <Stack.Screen name="Splash" component={SplashController} />
        <Stack.Screen name="Auth" component={AuthController} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteStack;
