/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, Image, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import recentCourses from '../assets/recentCourses';
import classes from '../assets/classes';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';
import InmakesLiveClasses from '../assets/InmakesLiveClasses';

Feather.loadFont();

export default Home = () => {
  const renderclasses = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={styles.classesimage}></Image>
      </View>
    );
  };
  const renderrecentCourses = ({item}) => {
    return (
      <View style={styles.recentCoursesWrapper}>
        <Image source={item.image} style={styles.image}></Image>
        <Text style={styles.recentCoursestitle}>{item.title}</Text>
        <View style={styles.recentCoursesPlayWrapper}>
          <Feather
            name="chevron-right"
            size={8}
            style={styles.recentCoursesPlay}
          />
        </View>
      </View>
    );
  };
  const renderInmakesLiveCLasses = ({item}) => {
    return (
      <View>
        <Image source={item.image} style={styles.classesimage}></Image>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* Header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image
            source={require('../assets/HeaderSquareLogo.png')}
            style={styles.profileImage}></Image>
          <Image
            source={require('../assets/inmakesLogo.png')}
            style={styles.inmakesLogo}></Image>
          <Image
            source={require('../assets/Classes.png')}
            style={styles.headerclassimage}></Image>
        </View>
      </SafeAreaView>
      {/* Titles */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleDay}>Good Morning</Text>
        <Text style={styles.titleName}>Aaron Taylor</Text>
      </View>
      {/* State*/}
      <View style={styles.class}>
        <Text style={styles.classText}>Class</Text>
        <Text style={styles.stateText}>Select state</Text>
      </View>
      {/* Classes */}
      <View style={styles.recentWrapper}>
        <View>
          <FlatList
            data={classes}
            renderItem={renderclasses}
            keyExtractor={item => item.id}
            horizontal={true}></FlatList>
        </View>
      </View>
      {/* Recent Courses */}
      <View style={styles.recentWrapper}>
        <Text style={styles.recentTitle}>Recent Courses</Text>
        <View>
          <FlatList
            data={recentCourses}
            renderItem={renderrecentCourses}
            keyExtractor={item => item.id}
            horizontal={true}></FlatList>
        </View>
      </View>
      {/* Inmakes Live Classes */}
      <View style={styles.recentWrapper}>
        <Text style={styles.recentTitle}>Recent Courses</Text>
        <View>
          <FlatList
            data={InmakesLiveClasses}
            renderItem={renderInmakesLiveCLasses}
            keyExtractor={item => item.id}
            horizontal={true}></FlatList>
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
    left: -20,
  },
  headerclassimage: {
    width: 105,
    height: 45,
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
  classesimage: {
    width: 105,
    height: 45,
    marginLeft: 15,
    left: 4,
  },
  recentWrapper: {
    marginTop: 20,
  },
  recentTitle: {
    fontSize: 16,
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: colors.textDark,
  },
  recentCoursesWrapper: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  recentCoursestitle: {},
  image: {
    height: 120,
    width: 220,
    left: 4,
    borderRadius: 5,
    marginLeft: 15,
  },
});
