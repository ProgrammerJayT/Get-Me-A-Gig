import {View, Text, SafeAreaView} from 'react-native';
import React, {useState, useEffect} from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthController = ({navigation, route}) => {
  console.log(route);

  if (route.params === undefined) {
    auth = 'login';
  } else {
    auth = route.params.auth;
  }

  if (auth === undefined) {
    auth = 'login';
  }

  return auth == 'login' ? (
    <Login nav={navigation} />
  ) : (
    <Register nav={navigation} />
  );
};

export default AuthController;
