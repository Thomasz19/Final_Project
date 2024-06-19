import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { UserContext } from '../UserContext';

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { workout, exercise } = route.params;
  const { userInfo } = useContext(UserContext);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');

  const handleLogExercise = async () => {
    if (!weight || !reps) {
      Alert.alert('Error', 'Please enter weight and reps.');
      return;
    }

    const exerciseLog = {
      userId: userInfo._id,
      workout: workout.title,
      exercise: exercise.title,
      weight,
      reps,
      timestamp: new Date(),
    };

    const config = {
      method: 'post',
      url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ahccmtz/endpoint/data/v1/action/insertOne',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'AVDiOuu2gQWJFXtVxQua89Sd9sw3U5BNsw5EWx98c1JXJzrqCElfzeo0bqaP1ZAL',//API key
      },
      data: JSON.stringify({
        collection: 'logs',
        database: 'FitMaster',
        dataSource: 'FitMaster0',
        document: exerciseLog,
      }),
    };

    try {
      await axios(config);
      Alert.alert('Success', 'Exercise log saved successfully!');
      navigation.navigate('Workout');
    } catch (error) {
      Alert.alert('Error', `Failed to log exercise: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.title}</Text>
      <Text style={styles.description}>{exercise.description}</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight"
        placeholderTextColor="#aaa"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Reps"
        placeholderTextColor="#aaa"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.logButton} onPress={handleLogExercise}>
        <Text style={styles.logButtonText}>Log Exercise</Text>
      </TouchableOpacity>
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
  description: {
    fontSize: 16,
    color: 'white',
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: 'white',
  },
  logButton: {
    backgroundColor: '#896CFE',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  logButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ExerciseDetailScreen;
