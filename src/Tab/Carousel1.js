/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Carousel1 = () => {
  const [phoneNumber, setPhoneNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/GodOfWar.png')}
        style={styles.photo}
      />
      <View style={styles.buttonlBox}></View>
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
  photo: {
    width: '80%',
    height: '80%',
  },
  buttonlBox: {
    width: 70,
    height: 60,
    marginTop: '6%',
    left: '30%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    backgroundColor: 'green',
  },
});

export default Carousel1;
