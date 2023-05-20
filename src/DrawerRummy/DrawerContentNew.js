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
            <Text style={styles.nameText}>Total Coin</Text>
            <Text style={styles.nameText}>coin:20000</Text>
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
          onPress={() => this.props.navigation.navigate('AboutUsNew')}>
          About Us
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('SettingsNew')}>
          Settings
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
          onPress={() => this.props.navigation.navigate('Wallet')}>
          Wallet Balance
        </Text>
        <Text
          style={styles.menu}
          onPress={() => this.props.navigation.navigate('Help')}>
          Help
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
    fontSize: 14,
    marginTop: 22,
    marginLeft: 90,
    color: 'gray',
    fontWeight: 'normal',
    borderBottomWidth: 1,
  },
  profileContainer: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'black',
  },
  profileIcon: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    borderRadius: 50,
    marginTop: 29,
    marginLeft: 10,
  },
  infoView: {
    marginLeft: 95,
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
  },
  nameText: {
    color: 'white',
    fontWeight: 'normal',
    marginBottom: 5,
    marginTop: 20,
  },
  goldText: {
    height: 20,
    width: 70,
    color: 'white',
    backgroundColor: 'gray',
    borderRadius: 5,
    textAlign: 'center',
  },
  inviteText: {
    height: 20,
    width: 70,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    textAlign: 'center',
  },
});
