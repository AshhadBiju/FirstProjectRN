/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Order extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.orderText}>Hi This is Order page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'brown',
  },
  orderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
