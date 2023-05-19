/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Status extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.statusText}>Hi This is Status page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
