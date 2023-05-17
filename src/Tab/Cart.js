/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cartText}>Hi This is Cart page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gold',
  },
  cartText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
