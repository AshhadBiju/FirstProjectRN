/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Chats extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.chatsText}>Hi This is Chats page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  chatsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
