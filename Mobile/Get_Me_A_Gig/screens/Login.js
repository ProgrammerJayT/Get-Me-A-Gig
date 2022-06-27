import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const Login = ({nav}) => {
  const gotoRegister = () => {
    nav.navigate('Auth', {
      auth: 'register',
    });
  };

  return (
    <SafeAreaView style={styles.body}>
      <Text onPress={gotoRegister}>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
