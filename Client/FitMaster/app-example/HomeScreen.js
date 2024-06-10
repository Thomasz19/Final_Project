import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

// Adjust the path based on where you saved your image
const logo = require('../assets/images/Logo.png');

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Welcome to Fitness App</Text>
      <Text style={styles.subtitle}>Your journey to a healthier life starts here.</Text>
      <Button
        title="Go to New Screen"
        onPress={() => navigation.navigate('NewScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
});
