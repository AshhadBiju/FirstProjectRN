/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Category extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.categoryText}>Hi This is Category page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'silver',
  },
  categoryText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
