/**
 * GenderSelectionScreen.js
 *
 * This screen component allows the user to select their gender. The selected gender
 * is stored in the context and the user can proceed to the next screen to continue the setup process.
 * If no gender is selected, an alert will prompt the user to make a selection.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/2024]
 */

import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { UserContext } from '../UserContext.js';

// Header component for the screen, including a back button
const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity style={styles.backContainer} onPress={() => navigation.goBack()}>
      <Image source={require('../assets/Arrow.png')} style={styles.backIcon} />
      <Text style={styles.backText}>Back</Text>
    </TouchableOpacity>
  </View>
);

// Heading component to display text headers
const Heading = ({ text }) => (
  <View style={styles.headingContainer}>
    <Text style={styles.headingText}>{text}</Text>
  </View>
);

// GenderCard component to display gender options
const GenderCard = ({ imageSrc, gender, onPress, isSelected }) => (
  <TouchableOpacity
    style={[styles.genderCardContainer, isSelected && styles.selectedGenderCard]}
    onPress={() => onPress(gender)}
  >
    <Image source={{ uri: imageSrc }} style={styles.genderCardImage} />
    <Heading text={gender} />
  </TouchableOpacity>
);

// Description component for additional text description
const Description = () => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.descriptionText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </View>
);

// Main component for gender selection screen
const GenderSelectionScreen = ({ navigation }) => {
  const { updateUserInfo } = useContext(UserContext); // Use context to update user information
  const [selectedGender, setSelectedGender] = useState(null); // State to track selected gender

  // Handle gender selection
  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    updateUserInfo({ gender });
  };

  // Handle continue button press
  const handleContinue = () => {
    if (!selectedGender) {
      Alert.alert('Error', 'Please select a gender.');
      return;
    }
    navigation.navigate('Age'); // Navigate to the next screen
  };

  return (
    <View style={styles.mainContainer}>
      <Header navigation={navigation} />
      <Text style={styles.titleText}>What’s Your Gender</Text>
      <Description />
      <GenderCard
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1497f9f8e4ea7c69b936e15339fb330e5460ad40a1df48a65d248be7ed3efd78?apiKey=f76625661eb545c3872498296f4b4317&"
        gender="Male"
        onPress={handleGenderSelect}
        isSelected={selectedGender === 'Male'}
      />
      <GenderCard
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1497f9f8e4ea7c69b936e15339fb330e5460ad40a1df48a65d248be7ed3efd78?apiKey=f76625661eb545c3872498296f4b4317&"
        gender="Female"
        onPress={handleGenderSelect}
        isSelected={selectedGender === 'Female'}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <View style={styles.continueButtonTextContainer}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
    padding: 10,
  },
  headerContainer: {
    top: '8%',
  },
  backContainer: {
    left: -140,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 30,
  },
  backIcon: {
    flexDirection: 'row',
    marginRight: 6,
  },
  backText: {
    color: '#E2F163',
    fontSize: 15,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: 60,
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  continueButton: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 50,
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
  genderCardContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  selectedGenderCard: {
    backgroundColor: '#4C51BF',
  },
  genderCardImage: {
    width: 171,
    height: 171,
  },
  descriptionContainer: {
    width: '110%',
    top: 0,
    backgroundColor: '#B3A0FF',
    padding: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#1A202C',
    textAlign: 'center',
  },
});

export default GenderSelectionScreen;
