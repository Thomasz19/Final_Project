import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import axios from 'axios';
import { UserContext } from '../UserContex'; // Ensure the correct import path
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo. Install with `expo install @expo/vector-icons`

const UserSelectScreen = ({ navigation }) => {
  const { updateUserInfo } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const config = {
        method: 'post',
        url: 'https://us-east-1.aws.data.mongodb-api.com/app/data-ahccmtz/endpoint/data/v1/action/find',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'AVDiOuu2gQWJFXtVxQua89Sd9sw3U5BNsw5EWx98c1JXJzrqCElfzeo0bqaP1ZAL', // Replace with your actual API key
        },
        data: JSON.stringify({
          collection: 'users',
          database: 'FitMaster',
          dataSource: 'FitMaster0',
        }),
      };

      try {
        const response = await axios(config);
        setUsers(response.data.documents);
      } catch (error) {
        Alert.alert('Error', 'Failed to fetch users.');
      }
    };

    fetchUsers();
  }, []);

  const handleUserSelect = (user) => {
    updateUserInfo(user);
    navigation.navigate('Main');
  };

  const handleAddUser = () => {
    navigation.navigate('Home'); // Adjust this to navigate to your add user screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a User</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.userItem} onPress={() => handleUserSelect(item)}>
            <Text style={styles.userName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddUser}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232323',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  userItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userName: {
    fontSize: 18,
    color: 'white',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#896CFE',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default UserSelectScreen;
