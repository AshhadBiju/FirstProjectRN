/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
export default class DrawerContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileIcon}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/cj.png')}></Image>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.nameText}>Carl Johnson CJ</Text>
            <Text style={styles.nameText}>cjLosSantos@gmail.com</Text>
            <Text style={styles.nameText}>0987456321</Text>
          </View>
        </View>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Home')}>
          Home
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Profile')}>
          Profile
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('AboutUs')}>
          AboutUs
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Settings')}>
          Settings
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  profileContainer: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  infoView: {
    marginLeft: 10,
  },
  profileImage: {
    height: '100%',
    width: '100%',
  },
  nameText: {
    color: '#360',
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
