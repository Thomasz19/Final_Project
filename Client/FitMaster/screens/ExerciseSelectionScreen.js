import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const exercises = [
  { id: '1', title: 'Bench Press', description: 'Chest exercise', workoutId: '1' },
  { id: '2', title: 'Squats', description: 'Leg exercise', workoutId: '2' },
  { id: '3', title: 'Deadlift', description: 'Back exercise', workoutId: '1' },
  // Add more exercises as needed
];

const ExerciseSelectionScreen = ({ route, navigation }) => {
  const { workout } = route.params;

  // Filter exercises based on selected workout
  const filteredExercises = exercises.filter(exercise => exercise.workoutId === workout.id);

  const handleExerciseSelect = (exercise) => {
    navigation.navigate('ExerciseDetail', { workout, exercise });
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
