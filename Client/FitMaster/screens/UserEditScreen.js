import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserEditScreen = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TitleText}>User Edit Screen</Text>
      <Text style={styles.DescriptionText}>This is the User Edit Screen.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Go to Main</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  TitleText: {
    color: 'white',
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  DescriptionText: {
    color: 'white',
    fontSize: 18,
    marginTop: 20,
  },
  button: {
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default UserEditScreen;
