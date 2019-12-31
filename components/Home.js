/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, Image, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import recentCourses from '../assets/recentCourses';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';

Feather.loadFont();

export default Home = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/crown.png')}
            style={styles.profileImage}></Image>
          <Image
            source={require('../assets/inmakesLogo.png')}
            style={styles.inmakesLogo}></Image>
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleDay}>Good Morning</Text>
        <Text style={styles.titleName}>Aaron Taylor</Text>
      </View>
      {/* Class */}
      <View style={styles.class}>
        <Text style={styles.classText}>Class</Text>
        <Text style={styles.stateText}>Select state</Text>
      </View>
      {/* Recent Courses */}
      <View style={styles.recentWrapper}>
        <Text style={styles.recentTitle}>Recent Courses</Text>
        <View>
          <FlatList></FlatList>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  inmakesLogo: {
    width: 140,
    height: 40,
    left: -60,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleDay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  titleName: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 2,
    color: colors.textDark,
  },
  class: {
    height: 90,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'black',
    marginTop: 10,
  },
  classText: {
    color: 'white',
    left: 30,
    top: 12,
  },
  stateText: {
    color: 'white',
    left: 30,
    top: 23,
  },
  recentWrapper: {
    marginTop: 30,
  },
  recentTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
});
