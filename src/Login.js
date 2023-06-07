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
            source={require('../assets/inmakesLogo.png')}
            style={styles.logo}
          />
          <Text style={styles.textView}>Enter your mobile number</Text>
          <Text style={styles.userView}>We will send you an OTP to verify</Text>

          <View
            style={styles.buttonView}
            underlayColor="transparent"
            onPress={() =>
              this.props.navigation.navigate('Tab', {
                username: this.state.name,
              })
            }>
            <View style={styles.continueBox}>
              <Text style={styles.continueText}>Continue</Text>
            </View>

            <View style={styles.buttonBox1}>
              <TextInput
                style={styles.buttonText}
                placeholder="+91"
                placeholderTextColor="black"
              />
            </View>
            <View style={styles.numberBox}>
              <TextInput
                style={styles.buttonText}
                placeholder="Mobile Number"
                placeholderTextColor="black"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'gray',
  },
  background_Image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 50,
    width: 180,
  },
  textView: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'black',
  },
  userView: {
    width: '70%',
    height: 40,
    marginTop: 10,
    paddingLeft: 20,
    color: 'black',
  },
  buttonView: {
    width: '70%',
    height: '20%',
    marginTop: 80,
    marginBottom: -240,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    backgroundColor: '#03292b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBox1: {
    width: 40,
    height: 40,
    borderColor: 'black',
    backgroundColor: 'gray',
    borderRadius: 6,
    borderWidth: 1,
    marginRight: 180,
    marginTop: -60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberBox: {
    width: 180,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 60,
    marginTop: -40,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBox: {
    width: 230,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    marginLeft: 8,
    backgroundColor: 'green',
    marginBottom: -40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  continueText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
