/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {TextInput, Button, Text, IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons';

const SchoolBoard = () => {
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
      <Text style={styles.enteryourtext}>Select your School Board </Text>

      <View style={styles.loginView}>
        <View style={styles.detailBox}>
          <Text style={styles.numberText}>Select Board</Text>
        </View>
        <View style={styles.detailBox}>
          <Text style={styles.numberText}>Select Class</Text>
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
    position: 'absolute',
    top: 210,
  },
  enteryourtext: {
    fontSize: 18,
    top: 300,
    fontWeight: 'bold',
    color: 'black',
  },
  verificationtext: {
    fontSize: 13,
    top: 300,
    fontWeight: '600',
    color: 'black',
  },
  sentToText: {
    top: 180,
  },
  loginView: {
    width: '85%',
    height: '65%',
    bottom: '-49%',
    paddingTop: '6%',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 13,
    backgroundColor: '#03292b',
  },
  continueBox: {
    width: 270,
    height: 50,
    marginTop: '4%',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  detailBox: {
    width: 270,
    height: 50,
    marginTop: '1%',
    justifyContent: 'space-around',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'gray',
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
    top: 70,
    right: 130,
  },
});

export default SchoolBoard;
