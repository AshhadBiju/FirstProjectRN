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
            style={styles.profileImage}>
            <Feather name="menu" size={24} color={colors.textDark} />
          </Image>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});
