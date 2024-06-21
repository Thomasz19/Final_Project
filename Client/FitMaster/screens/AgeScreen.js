/**
 * @fileoverview AgeScreen component
 * 
 * This screen component allows the user to select their age using a slider.
 * The selected age is stored in the UserContext and can be used in subsequent screens.
 * 
 * The screen includes a back button to navigate to the previous screen and a continue
 * button to proceed to the next screen (WeightScreen).
 * 
 * @author Thomas Zoldowski
 * @date 6/9/2024
 */

import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import { UserContext } from '../UserContext.js';

/**
 * AgeScreen component
 * @param {object} props - Component props
 * @param {object} props.navigation - Navigation object for navigating between screens
 * @return {JSX.Element}
 */
const AgeScreen = ({ navigation }) => {
  const { updateUserInfo } = useContext(UserContext);
  const [selectedAge, setSelectedAge] = useState(20); // Default age set to 20

  /**
   * Handle the continue button press
   */
  const handleContinue = () => {
    if (!selectedAge) {
      Alert.alert('Error', 'Please select an age.');
      return;
    }
    updateUserInfo({ age: selectedAge });
    navigation.navigate('Weight'); // Navigate to the WeightScreen
  };

  /**
   * Back button component
   * @param {object} props - Component props
   * @param {object} props.navigation - Navigation object for navigating between screens
   * @return {JSX.Element}
   */
  const BackButton = ({ navigation }) => (
    <TouchableOpacity style={styles.Backcontainer} onPress={() => navigation.goBack()}>
      <Image source={require('../assets/Arrow.png')} style={styles.BackArrow} />
      <Text style={styles.BackText}>Back</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.MainContainer}>
      <BackButton navigation={navigation} />
      <Text style={styles.TitleText}>How Old Are You?</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.ageText}>{selectedAge}</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={100}
          step={1}
          value={selectedAge}
          onValueChange={value => setSelectedAge(value)}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          thumbTintColor="#FFFFFF"
        />
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
    marginTop: 100,
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  sliderContainer: {
    marginTop: 50,
    width: '80%',
    alignItems: 'center',
  },
  ageText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slider: {
    width: '100%',
    height: 40,
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

export default AgeScreen;
