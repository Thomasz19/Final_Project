/**
 * WorkoutScreen.js
 *
 * This screen component allows users to select a workout from a list of predefined workouts.
 * Upon selecting a workout, the user navigates to the Exercise screen where exercises related to the selected workout are displayed.
 *
 * Author: [Your Name]
 * Date: [Date]
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Predefined list of workouts
const workouts = [
  { id: '1', title: 'Upper Body', description: 'Workout for upper body' },
  { id: '2', title: 'Lower Body', description: 'Workout for lower body' },
  // Add more workouts as needed
];

const WorkoutScreen = ({ navigation }) => {
  // Handle workout selection
  const handleWorkoutSelect = (workout) => {
    navigation.navigate('Exercise', { workout });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Workout</Text>
      <FlatList
        data={workouts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.workoutItem} onPress={() => handleWorkoutSelect(item)}>
            <Text style={styles.workoutTitle}>{item.title}</Text>
            <Text style={styles.workoutDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  workoutItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  workoutTitle: {
    fontSize: 18,
    color: 'white',
  },
  workoutDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default WorkoutScreen;
