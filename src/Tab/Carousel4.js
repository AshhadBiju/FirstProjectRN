/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';

const Carousel4 = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/GodOfWar.png')}
        style={styles.photo}
      />
      <Text style={styles.buttonlBox}>Done</Text>
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
    left: '35%',
    fontSize: 20,
  },
});

export default Carousel4;
