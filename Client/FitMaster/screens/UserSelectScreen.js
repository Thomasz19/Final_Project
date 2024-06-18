import React, { useState, useCallback, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert, Image } from 'react-native';
import axios from 'axios';
import { UserContext } from '../UserContext';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you are using Expo. Install with `expo install @expo/vector-icons`

const UserSelectScreen = ({ navigation, route }) => {
  const { updateUserInfo, deleteUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);

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
      console.log('Fetched users:', response.data.documents); // Add console log here
      setUsers(response.data.documents);
    } catch (error) {
      console.error('Error fetching users:', error); // Add console log for error
      Alert.alert('Error', 'Failed to fetch users.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchUsers();
    }, [])
  );

  const handleUserSelect = (user) => {
    updateUserInfo(user);
    navigation.navigate('Main');
  };

  const handleAddUser = () => {
    navigation.navigate('Name', { newUser: true }); // Pass parameter to indicate new user
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      fetchUsers(); // Refresh the user list after deletion
      Alert.alert('Success', 'User deleted successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to delete user.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.userItemContainer}>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteUser(item._id)}>
        <Image source={require('../assets/trashcan.png')} style={styles.trashIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.userItem} onPress={() => handleUserSelect(item)}>
        <Text style={styles.userName}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a User</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item._id}
        renderItem={renderItem}
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
  userItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    padding: 10,
  },
  trashIcon: {
    width: 24,
    height: 24,
  },
  userItem: {
    flex: 1,
    padding: 20,
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
