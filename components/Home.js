/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
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
          <Feather name="menu" size={24} color={colors.textDark} />
        </View>
      </SafeAreaView>
      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleDay}>Good Morning</Text>
        <Text style={styles.titleName}>Aaron Taylor</Text>
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
    borderRadius: 40,
  },
  titleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  titleDay: {
    fontSize: 16,
  },
  titleName: {
    fontSize: 26,
  },
});
