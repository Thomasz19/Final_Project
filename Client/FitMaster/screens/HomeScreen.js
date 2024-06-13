import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('../assets/Screen1Image.png')} style={styles.imageBackground}>
          <ImageBackground source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea42d6b6f923b74a7dad41618ae323a10fbec0b3a4b517a2c9046aee632ee811?apiKey=f76625661eb545c3872498296f4b4317&" }} style={styles.logo} />
        </ImageBackground>
      </View>
      <Text style={styles.quoteText}>Consistency Is{"\n"}the Key To progress.{"\n"}Don't Give Up!</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('GenderSelection')}>
        <View style={styles.nextButtonTextContainer}>
          <Text style={styles.nextButtonText}>Next</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
    padding: 0,
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    borderRadius: 0,
    overflow: 'hidden',
    marginBottom: 20,
  },
  imageBackground: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.85,
    justifyContent: 'space-between',
  },
  imageOverlay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  quoteText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E2F163',
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionContainer: {
    backgroundColor: '#B3A0FF',
    padding: 30,
    borderRadius: 0,
  },
  descriptionText: {
    fontSize: 16,
    color: '#1A202C',
    textAlign: 'center',
  },
  nextButton: {
    marginTop: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 20,
  },
  nextButtonTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default HomeScreen;
