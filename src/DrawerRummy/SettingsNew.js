/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class SettingsNew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.settingsText}>Hi This is Settings page</Text>
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
  settingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
