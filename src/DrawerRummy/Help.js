/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Help extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.helpText}>Hi This is Help page</Text>
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
  helpText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
