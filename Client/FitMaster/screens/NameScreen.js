import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { UserContext } from '../UserContex';

const NameInputScreen = ({ navigation }) => {
  const { userInfo, updateUserInfo, submitUserInfo } = useContext(UserContext);
  const [name, setName] = useState('');

  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter your name.');
      return;
    }

    // Update the name in userInfo
    const updatedUserInfo = { ...userInfo, name };

    try {
      // Log the userInfo to ensure it includes the name
      console.log('Submitting user info:', { ...userInfo, name });

      await submitUserInfo(updatedUserInfo);
      Alert.alert('Success', 'User information saved successfully!');
      navigation.navigate('Main'); // Navigate to MainScreen after saving
    } catch (error) {
      Alert.alert('Error', `There was a problem saving the user information: ${error.message}`);
    }
  };

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TitleText}>Enter Your Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
        placeholderTextColor="#aaa"
      />
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewText}>Age: {userInfo.age}</Text>
        <Text style={styles.reviewText}>Weight: {userInfo.weight} {userInfo.isKg ? 'kg' : 'lb'}</Text>
        <Text style={styles.reviewText}>Gender: {userInfo.gender}</Text>
        <Text style={styles.reviewText}>Height: {userInfo.height} cm</Text>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <View style={styles.saveButtonTextContainer}>
          <Text style={styles.saveButtonText}>Save</Text>
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
    marginTop: 50,
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  },
  input: {
    marginTop: 20,
    height: 40,
    width: '80%',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
  },
  reviewContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  reviewText: {
    color: 'white',
    fontSize: 18,
    marginVertical: 5,
  },
  saveButton: {
    marginTop: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 50,
    alignSelf: 'center',
  },
  saveButtonTextContainer: {
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 50,
  },
  saveButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NameInputScreen;