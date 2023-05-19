/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Calls extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.callsText}>Hi This is Calls page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  callsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
