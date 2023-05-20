/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
    };
  }

  updateValue(username) {
    console.log(username);
    this.setState({name: username});
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/bg.jpg')}
          style={styles.background_Image}>
          <Image
            source={require('../assets/gta-5-7203.png')}
            style={styles.logo}
          />
          <Text style={styles.textView}>Welcome to Los Santos</Text>
          <TextInput
            style={styles.inputView}
            placeholder="Username"
            placeholderTextColor="white"
            maxLength={10}
            onChangeText={username => this.updateValue(username)}
          />
          <TextInput
            style={styles.inputView}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
          />
          <TouchableHighlight
            style={styles.buttonView}
            underlayColor="transparent"
            onPress={() =>
              this.props.navigation.navigate('DrawerRummy', {
                username: this.state.name,
              })
            }>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
  },
  background_Image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white',
  },
  inputView: {
    width: '70%',
    height: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 30,
    paddingLeft: 20,
    color: 'white',
  },
  buttonView: {
    width: '30%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 30,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'gray',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
