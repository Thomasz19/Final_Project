import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to FitMaster</Text>
      <Text style={styles.subtitle}>Your fitness journey starts here!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E2F163',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomeScreen;
