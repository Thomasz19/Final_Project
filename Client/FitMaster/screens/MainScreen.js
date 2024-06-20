/**
 * MainScreen.js
 *
 * This screen component displays the main interface for the fitness app, including greetings, exercise recommendations, and navigation options.
 * The user information is retrieved from the UserContext.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/2024]
 */

import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { UserContext } from '../UserContext';

const MainScreen = ({ navigation }) => {
  const { userInfo } = useContext(UserContext);
  console.log('Current User:', userInfo.name);

  return (
    <View style={styles.container}>
      <Image style={styles.image1} source={{ uri: "https://via.placeholder.com/157x134" }} />
      <Image style={styles.image2} source={{ uri: "https://via.placeholder.com/157x134" }} />
      <Text style={styles.greeting}>Hi, {userInfo.name}</Text>
      <Text style={styles.subtitle}>It's time to challenge your limits.</Text>
      <Text style={styles.exerciseTitle1}>Squat Exercise</Text>
      <Text style={styles.exerciseTitle2}>Full Body Stretching</Text>
      <Text style={styles.sectionTitle}>Recommendations</Text>
      <Text style={styles.seeAll}>See all</Text>
      <View style={styles.recommendationBox1} />
      <View style={styles.recommendationBox2} />
      <View style={styles.weeklyChallengeBox} />
      <Text style={styles.weeklyChallengeTitle}>Weekly{'\n'}Challenge</Text>
      <Text style={styles.articlesTips}>Articles & Tips</Text>
      <Text style={styles.article1}>Supplement Guide...</Text>
      <Text style={styles.article2}>15 Quick & Effective Daily Routines...</Text>
      <Text style={styles.exerciseDescription}>Plank With Hip Twist</Text>
      <View style={styles.arrow}>
        <View style={styles.arrowInner}></View>
      </View>
      <TouchableOpacity style={styles.UserIconContainer} onPress={() => navigation.navigate('UserEdit')}>
        <Image source={require('../assets/User.png')} style={styles.UserIcon} />
      </TouchableOpacity>
      <Image style={styles.recommendationImage1} source={{ uri: "https://via.placeholder.com/157x92" }} />
      <Image style={styles.recommendationImage2} source={{ uri: "https://via.placeholder.com/157x92" }} />
      <Image style={styles.weeklyChallengeImage} source={{ uri: "https://via.placeholder.com/157x125" }} />
      <View style={styles.circle1}>
        <View style={styles.arrowIcon}></View>
      </View>
      <View style={styles.circle2}>
        <View style={styles.arrowIcon}></View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarLine}></View>
        <View style={styles.bottomBarBackground} />
        <View style={styles.bottomIcon1}></View>
        <View style={styles.bottomIcon2}></View>
        <View style={styles.bottomIcon3}></View>
        <View style={styles.bottomIcon4}></View>
      </View>
      <View style={styles.menu}>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Workout')}>
            <Image source={require('../assets/workoutIcon.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.menuDivider}></View>
        <View style={styles.menuItem}>
          <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Log')}>
            <Image source={require('../assets/LogIcon.png')} style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.menuDivider}></View>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon3}></View>
          <Text style={styles.menuText3}>Nutrition</Text>
        </View>
        <View style={styles.menuDivider}></View>
        <View style={styles.menuItem}>
          <View style={styles.menuIcon4}></View>
          <Text style={styles.menuText4}>Community</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 393,
    height: 785,
    position: 'relative',
    backgroundColor: '#212020',
    overflow: 'hidden',
    borderWidth: 1,
  },
  image1: {
    width: 157,
    height: 134,
    left: 35,
    top: 611,
    position: 'absolute',
    borderRadius: 20,
  },
  image2: {
    width: 157,
    height: 134,
    left: 201,
    top: 611,
    position: 'absolute',
    borderRadius: 20,
  },
  greeting: {
    left: 34,
    top: 61,
    position: 'absolute',
    color: '#896CFE',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  subtitle: {
    width: 209,
    left: 35,
    top: 94,
    position: 'absolute',
    color: 'white',
    fontSize: 13,
    fontWeight: '500',
    wordWrap: 'break-word',
  },
  exerciseTitle1: {
    left: 46,
    top: 325,
    position: 'absolute',
    color: '#373737',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  exerciseTitle2: {
    left: 212,
    top: 325,
    position: 'absolute',
    color: '#373737',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  sectionTitle: {
    left: 38,
    top: 200,
    position: 'absolute',
    color: '#373737',
    fontSize: 15,
    fontWeight: '500',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  seeAll: {
    left: 305,
    top: 203,
    position: 'absolute',
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  recommendationBox1: {
    width: 157,
    height: 138,
    left: 35,
    top: 229,
    position: 'absolute',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
  },
  recommendationBox2: {
    width: 157,
    height: 138,
    left: 201,
    top: 229,
    position: 'absolute',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
  },
  weeklyChallengeBox: {
    width: 324,
    height: 125.11,
    left: 34,
    top: 413,
    position: 'absolute',
    backgroundColor: '#212020',
    borderRadius: 20,
  },
  weeklyChallengeTitle: {
    left: 58,
    top: 439,
    position: 'absolute',
    textAlign: 'center',
    color: '#373737',
    fontSize: 24,
    fontWeight: '500',
    textTransform: 'capitalize',
    lineHeight: 25,
    wordWrap: 'break-word',
  },
  articlesTips: {
    left: 35,
    top: 583,
    position: 'absolute',
    color: '#373737',
    fontSize: 14,
    fontWeight: '500',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  article1: {
    left: 41,
    top: 752,
    position: 'absolute',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  article2: {
    width: 145,
    left: 209,
    top: 752,
    position: 'absolute',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  exerciseDescription: {
    width: 125,
    left: 59,
    top: 494,
    position: 'absolute',
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  arrow: {
    width: 6,
    height: 11.14,
    left: 358,
    top: 217.14,
    position: 'absolute',
    transform: [{ rotate: '-180deg' }],
    transformOrigin: '0 0',
  },
  arrowInner: {
    width: 6,
    height: 11.14,
    left: 6,
    top: 11.14,
    position: 'absolute',
    transform: [{ rotate: '-180deg' }],
    transformOrigin: '0 0',
    backgroundColor: '#E2F163',
  },
  UserIconContainer: {
    left: 343,
    top: 66,
    position: 'absolute',
  },
  UserIcon: {
    width: 14.49,
    height: 18,
  },
  recommendationImage1: {
    width: 157,
    height: 92,
    left: 35,
    top: 229,
    position: 'absolute',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  recommendationImage2: {
    width: 157,
    height: 92,
    left: 201,
    top: 229,
    position: 'absolute',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  weeklyChallengeImage: {
    width: 157,
    height: 125,
    left: 201,
    top: 413,
    position: 'absolute',
    borderRadius: 20,
  },
  circle1: {
    width: 23,
    height: 23,
    left: 161,
    top: 308,
    position: 'absolute',
    backgroundColor: '#896CFE',
    borderRadius: 9999,
  },
  circle2: {
    width: 23,
    height: 23,
    left: 327,
    top: 308,
    position: 'absolute',
    backgroundColor: '#896CFE',
    borderRadius: 9999,
  },
  arrowIcon: {
    width: 9.86,
    height: 11.83,
    left: 7.23,
    top: 5.26,
    position: 'absolute',
    backgroundColor: 'white',
  },
  bottomBar: {
    width: 394,
    height: 59,
    left: 0,
    top: 793,
    position: 'absolute',
  },
  bottomBarLine: {
    width: 393,
    height: 0,
    left: 0,
    top: 0.5,
    position: 'absolute',
    borderColor: '#7C57FF',
    borderWidth: 1,
  },
  bottomBarBackground: {
    width: 393,
    height: 59,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#B3A0FF',
  },
  bottomIcon1: {
    width: 28,
    height: 28,
    left: 225,
    top: 16,
    position: 'absolute',
    backgroundColor: 'white',
  },
  bottomIcon2: {
    width: 25,
    height: 27,
    left: 45,
    top: 16,
    position: 'absolute',
    backgroundColor: 'white',
  },
  bottomIcon3: {
    width: 25,
    height: 29,
    left: 135,
    top: 15,
    position: 'absolute',
  },
  bottomIcon4: {
    width: 32,
    height: 31,
    left: 318,
    top: 14,
    position: 'absolute',
    backgroundColor: 'white',
  },
  menu: {
    width: 323,
    left: 35,
    top: 118,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 13,
    flexDirection: 'row',
  },
  menuItem: {
    padding: 9,
    borderRadius: 20,
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuIcon: {
    width: 60,
    height: 60,
  },
  menuText1: {
    textAlign: 'center',
    color: '#373737',
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
  menuDivider: {
    width: 0,
    height: 40,
    borderColor: '#B3A0FF',
    borderWidth: 0.75,
  },
  menuIcon2: {
    width: 28.08,
    height: 32,
    backgroundColor: '#B3A0FF',
  },
  menuText2: {
    textAlign: 'center',
    color: '#B3A0FF',
    fontSize: 12,
    fontWeight: '300',
    textTransform: 'capitalize',
    lineHeight: 12,
    wordWrap: 'break-word',
  },
  menuIcon3: {
    width: 30.04,
    height: 32,
    backgroundColor: '#B3A0FF',
  },
  menuText3: {
    textAlign: 'center',
    color: '#B3A0FF',
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
  menuIcon4: {
    width: 32,
    height: 21.93,
    backgroundColor: '#B3A0FF',
  },
  menuText4: {
    textAlign: 'center',
    color: '#B3A0FF',
    fontSize: 12,
    fontWeight: '300',
    lineHeight: 20,
    wordWrap: 'break-word',
  },
});

export default MainScreen;
