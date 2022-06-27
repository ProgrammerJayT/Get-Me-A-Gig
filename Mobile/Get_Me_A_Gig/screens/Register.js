import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';

const Register = ({nav}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const gotoLogin = () => {
    nav.navigate('Auth', {
      auth: 'login',
    });
  };

  const handleName = text => {
    const strLen = text.length;

    if (strLen > 0) {
      for (let i = 0; i < strLen; i++) {
        const element = text[i];

        if (element.match(/[^a-zA-Z]/) && element !== ' ') {
          alert('Name must be only letters');
          setName(name.replace(element, ''));
        } else {
          setName(text.toUpperCase());
        }
      }
    } else {
      setName('');
    }
  };

  const handleSurname = text => {
    const strLen = text.length;

    if (strLen > 0) {
      for (let i = 0; i < strLen; i++) {
        const element = text[i];

        if (element.match(/[^a-zA-Z]/) && element !== ' ') {
          alert('Surname must be only letters');
          setSurname(surname.replace(element, ''));
        } else {
          setSurname(text.toUpperCase());
        }
      }
    } else {
      setSurname('');
    }
  };

  const handleAge = text => {
    if (text.length > 0) {
      if (isNaN(text)) {
        alert('Age must be a number');
        setAge(age.replace(text, ''));
      } else {
        if (text < 0) {
          alert('Age must be greater than 0');
          setAge('');
        } else if (text > 100) {
          alert('You are too old');
          setAge('');
        } else {
          setAge(text);
        }
      }
    } else {
      setAge('');
    }
  };

  const handlePhone = text => {
    if (text.length > 0) {
      if (isNaN(text)) {
        alert('Phone must be a number');
        setPhone(phone.replace(text, ''));
      } else {
        if (text.length > 10) {
          alert('Phone must be 10 digits long');
          setPhone(phone.substring(0, 10));
        } else {
          setPhone(text);
        }
      }
    } else {
      setPhone('');
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView contentContainerStyle={styles.scroller}>
        <LottieView
          style={styles.lottie}
          source={require('../res/lottie_files/11067-registration-animation.json')}
          autoPlay
          loop
        />
        <Text style={styles.header_field_text}>Personal Information</Text>
        <Text style={styles.input_field_text}>First Name</Text>
        <TextInput
          style={styles.input_field}
          onChangeText={handleName}
          autoCapitalize={'characters'}
          value={name}
          autoCorrect={false}
        />
        <View style={{marginBottom: 20}} />
        <Text style={styles.input_field_text}>Last Name</Text>
        <TextInput
          style={styles.input_field}
          onChangeText={handleSurname}
          autoCapitalize={'characters'}
          value={surname}
        />
        <View style={{marginBottom: 20}} />
        <Text style={styles.input_field_text}>Age</Text>
        <TextInput
          style={styles.input_field}
          onChangeText={handleAge}
          autoCapitalize={'characters'}
          keyboardType={'phone-pad'}
          value={age}
        />
        <View style={{marginBottom: 20}} />
        <Text style={styles.input_field_text}>Phone Number</Text>
        <TextInput
          style={styles.input_field}
          onChangeText={handlePhone}
          autoCapitalize={'characters'}
          keyboardType={'phone-pad'}
          value={phone}
        />
        <View style={{marginBottom: 20}} />
        <Text onPress={gotoLogin}>Register Page</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },

  scroller: {
    alignItems: 'center',
    width: '100%',
  },

  lottie: {
    width: '70%',
    resizeMode: 'contain',
    marginBottom: 25,
  },

  header_field_text: {
    fontSize: 30,
    width: '100%',
    paddingHorizontal: 25,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#3490dc',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },

  input_field_text: {
    fontSize: 15,
    width: '100%',
    paddingHorizontal: 25,
    fontWeight: 'bold',
    color: '#3490dc',
  },

  input_field: {
    backgroundColor: '#ebebeb',
    width: '90%',
    marginTop: 5,
    borderRadius: 10,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});
