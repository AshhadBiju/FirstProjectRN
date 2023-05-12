/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
class FlexContent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.contentStyle}>Hi My name is{this.props.name}</Text>
      </View>
    );
  }
}
export default class Flexbox extends Component {
  constructor() {
    super();
    this.state = {
      main_text: 'Hi(state)',
      sub_text: 'React(state)',
    };
  }

  componentDidMount() {
    console.log('the username is: ', this.props.route.params.username);
  }

  updateText() {
    this.setState({
      main_text: 'Hi (Hello updated)',
      sub_text: 'Framework (React Updated)',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.main_text}</Text>
        <Text style={styles.text}>{this.state.sub_text}</Text>
        <Text style={styles.text}>Native</Text>
        <TouchableHighlight
          style={styles.button}
          underlayColor={'red'}
          onPress={() => this.updateText()}>
          <Text style={styles.buttontexts}>UPDATE</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor="#ffffff"
          onPress={() => this.props.route.params.navigation.navigate('Drawer')}>
          <Text style={styles.buttontext}>Click HERE</Text>
        </TouchableHighlight>
        <FlexContent name={this.props.route.params.username} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  button: {
    width: '60%',
    height: 55,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttontext: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  contentStyle: {
    fontSize: 16,
    color: 'indigo',
    fontWeight: 'bold',
  },
});
