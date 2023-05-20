/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Wallet extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.walletText}>Hi This is Wallet Balance page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  walletText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
