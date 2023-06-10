/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput, Button, Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons';

const Verification = () => {
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
      <Text style={styles.enteryourtext}>Verification code</Text>
      <Text style={styles.verificationtext}>
        Please type the verification code sent to
      </Text>
      <Text style={styles.sentToText}>+91 840482390</Text>
      <View style={styles.loginView}>
        <View style={styles.countryNumberBox}>
          <Text style={styles.numberText}>+91</Text>
        </View>
        <View style={styles.countryNumberBox}>
          <Text style={styles.numberText}>+91</Text>
        </View>
        <View style={styles.countryNumberBox}>
          <Text style={styles.numberText}>+91</Text>
        </View>
        <View style={styles.countryNumberBox}>
          <Text style={styles.numberText}>+91</Text>
        </View>
        <View style={styles.countryNumberBox}>
          <Text style={styles.numberText}>+91</Text>
        </View>
        <Button
          style={styles.continueBox}
          mode="contained"
          onPress={handleLogin}>
          <Text style={styles.continueText}>Resend OTP</Text>
        </Button>
        <Button icon="phone" style={styles.contactLogo}>
          Contact Us
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
    top: 170,
    fontWeight: 'bold',
    color: 'black',
  },
  verificationtext: {
    fontSize: 13,
    top: 173,
    fontWeight: '600',
    color: 'black',
  },
  sentToText: {
    top: 180,
  },
  loginView: {
    width: '85%',
    height: '35%',
    bottom: '-49%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 13,
    backgroundColor: '#03292b',
  },
  continueBox: {
    width: 270,
    height: 50,
    top: 100,
    position: 'absolute',
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
    width: 54,
    height: 50,
    left: 62,
    top: -40,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'gray',
  },
  contactLogo: {
    backgroundColor: 'black',
    textDecorationColor: 'white',
    top: 70,
    right: 130,
  },
});

export default Verification;
