/**
 * WeightScreen.js
 *
 * This screen component allows users to select their weight using a scrollable ruler.
 * Users can toggle between kilograms and pounds and continue to the next screen after selection.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/20/2024]
 */

import React, { useState, useContext, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Animated, Image, Switch, ScrollView, Dimensions } from 'react-native';
import { UserContext } from '../UserContext';

const WeightScreen = ({ navigation }) => {
  const { updateUserInfo } = useContext(UserContext);
  const [selectedWeight, setSelectedWeight] = useState(70); // Default weight set to 70
  const [isKg, setIsKg] = useState(true); // Default unit is kg
  const scrollX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

  // Toggle between kg and lb
  const handleUnitToggle = () => {
    setIsKg((previousState) => !previousState);
  };

  // Back button component
  const BackButton = ({ navigation }) => (
    <TouchableOpacity style={styles.Backcontainer} onPress={() => navigation.goBack()}>
      <Image source={require('../assets/Arrow.png')} style={styles.BackArrow} />
      <Text style={styles.BackText}>Back</Text>
    </TouchableOpacity>
  );

  // Handle the continue button press
  const handleContinue = () => {
    if (!selectedWeight) {
      Alert.alert('Error', 'Please select a weight.');
      return;
    }
    const weight = isKg ? selectedWeight : selectedWeight * 0.453592; // Convert lb to kg if needed
    updateUserInfo({ weight });
    navigation.navigate('Height'); // Navigate to the next screen
  };

  // Handle scroll event for weight selection
  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    {
      useNativeDriver: false,
      listener: (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const weight = Math.round(offsetX / 10); // Adjust the weight increment as needed
        setSelectedWeight(weight);
      },
    }
  );

  return (
    <View style={styles.MainContainer}>
      <BackButton navigation={navigation} />
      <Text style={styles.TitleText}>What is Your Weight?</Text>
      <View style={styles.unitToggleContainer}>
        <Text style={styles.unitText}>kg</Text>
        <Switch
          onValueChange={handleUnitToggle}
          value={!isKg}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isKg ? '#f4f3f4' : '#f5dd4b'}
        />
        <Text style={styles.unitText}>lb</Text>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.weightText}>
          {isKg ? selectedWeight : (selectedWeight * 2.20462).toFixed(0)} {isKg ? 'kg' : 'lb'}
        </Text>
        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={onScroll}
          contentContainerStyle={styles.scrollViewContent}
          snapToInterval={10}
          decelerationRate="fast"
        >
          {[...Array(300)].map((_, i) => {
            const value = i * 10;
            return (
              <View key={i} style={styles.rulerMark}>
                <Text style={styles.rulerMarkText}>{value}</Text>
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
    marginTop: 100,
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  unitToggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  unitText: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 10,
  },
  sliderContainer: {
    marginTop: 50,
    width: '100%', // Updated to span the full width of the screen
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weightText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingHorizontal: Dimensions.get('window').width / 2 - 20, // Center the ruler marks
  },
  rulerMark: {
    width: 2,
    height: 50,
    backgroundColor: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  rulerMarkText: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
    marginTop: 5,
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

export default WeightScreen;
