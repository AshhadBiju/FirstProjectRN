/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/inmakesLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.enteryourtext}>Enter your mobile number</Text>
      <Text style={styles.OTPtext}>We will send you an OTP to verify</Text>
      <View style={styles.loginView}>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>Mobile Number</Text>
        </View>
        <View style={styles.countryNumberBox}>
          <Text style={styles.numberText}>+91</Text>
        </View>
        <Button
          style={styles.continueBox}
          mode="contained"
          onPress={handleLogin}>
          <Text style={styles.continueText}>Continue</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    width: 170,
    height: 40,
  },
  enteryourtext: {
    fontSize: 18,
    top: 180,
    fontWeight: 'bold',
    color: 'black',
  },
  OTPtext: {
    fontSize: 13,
    top: 183,
    fontWeight: '100',
    color: 'black',
  },
  loginView: {
    width: '75%',
    height: '25%',
    bottom: '-36%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 13,
    backgroundColor: '#03292b',
  },
  continueBox: {
    width: 235,
    height: 40,
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  continueText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'white',
  },
  numberBox: {
    width: 188,
    height: 40,
    justifyContent: 'center',
    right: '-9%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'gray',
  },
  numberText: {
    fontSize: 13,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'left',
    paddingLeft: '10%',
  },
  countryNumberBox: {
    width: 44,
    height: 40,
    left: -94,
    top: -40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'gray',
  },
});

export default LoginScreen;
