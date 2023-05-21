/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      loader: false,
    };
  }

  getData() {
    this.setState({loader: true});
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(response => {
        this.setState({loader: false});
        console.log('YOUR RESPONSE is:', response);
      })
      .catch(error => {
        this.setState({loader: false});
        console.log('ERROR IS:', error);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} animating={this.state.loader} />
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
