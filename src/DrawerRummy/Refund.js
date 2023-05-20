/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Refund extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.refundText}>Hi This is Refund & Policies page</Text>
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
  refundText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
