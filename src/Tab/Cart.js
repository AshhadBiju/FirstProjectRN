/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.scrollChildView}>
            <View style={styles.headerCard}></View>
            <View style={styles.baselineCard}>
              <View style={styles.textHolder}>
                <Icon name="edit" size={16} color="black" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Mounting</Text>
              </View>
              <View style={styles.textHolder}>
                <Icon name="edit" size={16} color="black" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Updating</Text>
              </View>
              <View style={styles.textHolder}>
                <Icon name="edit" size={16} color="black" />
                <Text style={{fontSize: 16, marginLeft: 10}}>Un-Mounting</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  scrollContainer: {
    width: '100%',
    height: '100%',
  },
  scrollChildView: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCard: {
    width: '95%',
    height: 200,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginTop: 10,
    elevation: 4,
  },
  baselineCard: {
    width: '95%',
    padding: 15,
    backgroundColor: '#ffffff',
    marginTop: 30,
    elevation: 4,
  },
  textHolder: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
});
