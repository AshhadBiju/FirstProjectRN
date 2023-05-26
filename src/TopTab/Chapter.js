/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Chapter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.chapterText}>Hi This is Chapter page</Text>
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
  chapterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
