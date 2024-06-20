/**
 * HeightScreen.js
 *
 * This screen component allows the user to select their height using a custom scrollable ruler.
 * The selected height is stored in the context and the user can proceed to the next screen to continue the setup process.
 * If no height is selected, an alert will prompt the user to make a selection.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/2024]
 */

import React, { useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated, Image, Dimensions } from 'react-native';
import { UserContext } from '../UserContext';

const RULER_MARK_HEIGHT = 50; // Height of each ruler mark container

const HeightScreen = ({ navigation }) => {
  const { updateUserInfo } = useContext(UserContext); // Use context to update user information
  const [selectedHeight, setSelectedHeight] = useState(170); // Default height set to 170 cm
  const scrollY = useRef(new Animated.Value(0)).current; // Animated value for scroll position
  const { height } = Dimensions.get('window');

  // Back button component
  const BackButton = ({ navigation }) => (
    <TouchableOpacity style={styles.Backcontainer} onPress={() => navigation.goBack()}>
      <Image source={require('../assets/Arrow.png')} style={styles.BackArrow} />
      <Text style={styles.BackText}>Back</Text>
    </TouchableOpacity>
  );

  // Handle continue button press
  const handleContinue = () => {
    if (!selectedHeight) {
      Alert.alert('Error', 'Please select a height.');
      return;
    }
    updateUserInfo({ height: selectedHeight });
    navigation.navigate('Name'); // Navigate to the next screen
  };

  // Handle scroll event to update selected height
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const height = Math.round(offsetY / RULER_MARK_HEIGHT) + 100; // Adjust based on RULER_MARK_HEIGHT
        setSelectedHeight(height);
      },
    }
  );

  return (
    <View style={styles.MainContainer}>
      <BackButton navigation={navigation} />
      <Text style={styles.TitleText}>What is Your Height?</Text>
      <Text style={styles.SelectedHeightText}>{selectedHeight} cm</Text>
      <View style={styles.sliderContainer}>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>▲</Text>
        </View>
        <Animated.ScrollView
          vertical
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          contentContainerStyle={styles.scrollViewContent}
          snapToInterval={RULER_MARK_HEIGHT}
          decelerationRate="fast"
        >
          {[...Array(201)].map((_, i) => {
            const value = i + 100;
            return (
              <View key={i} style={styles.rulerMarkContainer}>
                <Text style={styles.rulerMarkText}>{value}</Text>
                <View style={styles.rulerMark} />
              </View>
            );
          })}
        </Animated.ScrollView>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <View style={styles.continueButtonTextContainer}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#232323',
    alignItems: 'center',
  },
  TitleText: {
    marginTop: 50,
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  SelectedHeightText: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 80,
  },
  sliderContainer: {
    width: '40%',
    height: '45%', // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  scrollViewContent: {
    alignItems: 'flex-start',
    paddingVertical: Dimensions.get('window').height / 2 - 250, // Center the ruler marks
  },
  rulerMarkContainer: {
    width: '100%',
    height: RULER_MARK_HEIGHT, // Ensure this matches snapToInterval
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rulerMarkText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 60, // Adjust width as needed
  },
  rulerMark: {
    width: 50,
    height: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    marginLeft: 10, // Adjust margin to position the tick marks correctly
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    left: 125,
    transform: [{ translateY: -18 }, { rotate: "-90deg" }, { scale: 1.2 }],
    zIndex: 1,
  },
  arrow: {
    color: '#373737',
    fontSize: 24,
    fontWeight: 'bold',
  },
  continueButton: {
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    alignSelf: 'center',
  },
  continueButtonTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Backcontainer: {
    left: 40,
    position: 'absolute',
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E2F163',
    textAlign: 'center',
    flexDirection: 'row',
  },
  BackArrow: {
    marginRight: 6,
  },
  BackText: {
    color: '#E2F163',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
});

export default HeightScreen;
