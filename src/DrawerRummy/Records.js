/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Records extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.recordsText}>Hi This is Records page</Text>
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
  recordsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
