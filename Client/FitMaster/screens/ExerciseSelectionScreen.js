/**
 * ExerciseSelectionScreen.js
 *
 * This screen component allows the user to select an exercise from a list of exercises
 * based on the selected workout. The exercises are filtered to show only those
 * that belong to the selected workout. Upon selecting an exercise, the user is navigated
 * to the ExerciseDetail screen to log details about the exercise.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/2024]
 */

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

// Sample exercises data
const exercises = [
  { id: '1', title: 'Bench Press', description: 'Chest exercise', workoutId: '1' },
  { id: '2', title: 'Squats', description: 'Leg exercise', workoutId: '2' },
  { id: '3', title: 'Deadlift', description: 'Back exercise', workoutId: '1' },
  // Add more exercises as needed
];

const ExerciseSelectionScreen = ({ route, navigation }) => {
  const { workout } = route.params; // Destructure workout from route params

  // Filter exercises based on selected workout
  const filteredExercises = exercises.filter(exercise => exercise.workoutId === workout.id);

  // Handle exercise selection
  const handleExerciseSelect = (exercise) => {
    navigation.navigate('ExerciseDetail', { workout, exercise }); // Navigate to ExerciseDetail screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Exercise for {workout.title}</Text>
      <FlatList
        data={filteredExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.exerciseItem} onPress={() => handleExerciseSelect(item)}>
            <Text style={styles.exerciseTitle}>{item.title}</Text>
            <Text style={styles.exerciseDescription}>{item.description}</Text>
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
  exerciseItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  exerciseTitle: {
    fontSize: 18,
    color: 'white',
  },
  exerciseDescription: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ExerciseSelectionScreen;
