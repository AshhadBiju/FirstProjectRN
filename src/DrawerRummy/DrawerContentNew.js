/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
export default class DrawerContentNew extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileIcon}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/crown.png')}></Image>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.profileText}>Favaz</Text>
            <Text style={styles.goldText}>Gold</Text>
            <Text style={styles.totalcoinText}>Total Coin</Text>
            <Text style={styles.coinText}>coin:20000</Text>
            <Text style={styles.inviteText}>Invite</Text>
          </View>
        </View>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('HomeNew')}>
          Home
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('ProfileNew')}>
          Profile
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Wallet')}>
          Wallet Balance
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Records')}>
          Records
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Refund')}>
          Refund and policies
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('SettingsNew')}>
          Settings
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('AboutUsNew')}>
          About Us
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Help')}>
          Help
        </Text>
        <Text style={styles.logoutText}>Logout</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    fontSize: 12,
    marginTop: 12,
    marginLeft: 40,
    color: 'black',
    fontWeight: 'normal',
    padding: 6,
    borderBottomWidth: 0.5,
  },
  profileContainer: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  profileIcon: {
    height: 55,
    width: 70,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 29,
    marginLeft: 10,
  },
  infoView: {
    color: 'black',
  },
  profileImage: {
    height: '50%',
    width: '100%',
  },
  profileText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 5,
    marginTop: 20,
    marginLeft: 130,
  },
  totalcoinText: {
    color: 'white',
    fontWeight: 'normal',
    marginLeft: 120,
    marginTop: 65,
  },
  coinText: {
    color: 'white',
    fontWeight: 'normal',
    marginLeft: 120,
  },
  goldText: {
    height: 20,
    width: 70,
    color: 'white',
    backgroundColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: 120,
  },
  inviteText: {
    height: 20,
    width: 70,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
    marginLeft: -75,
    marginTop: -25,
  },
  logoutText: {
    fontSize: 12,
    marginTop: 100,
    marginLeft: 100,
    color: 'black',
    fontWeight: 'normal',
    padding: 6,
  },
});
