import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Assuming you are using Expo. Install with `expo install @react-native-community/datetimepicker`
import { Ionicons } from '@expo/vector-icons';
import { UserContext } from '../UserContext';

const EditUserScreen = ({ navigation }) => {
  const { userInfo, updateUserInfo, submitUserInfo } = useContext(UserContext);
  const [name, setName] = useState(userInfo.name);
  const [weight, setWeight] = useState(userInfo.weight.toString());
  const [height, setHeight] = useState(userInfo.height.toString());
  const [dob, setDob] = useState(new Date());
  const [age, setAge] = useState(userInfo.age);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
    const calculatedAge = calculateAge(currentDate);
    setAge(calculatedAge);
  };

  const handleSave = async () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedWeight) || isNaN(parsedHeight)) {
      Alert.alert('Error', 'Please enter valid weight and height.');
      return;
    }

    try {
      await submitUserInfo({ ...userInfo, name, age, weight: parsedWeight, height: parsedHeight });
      await updateUserInfo({ ...userInfo, name, age, weight: parsedWeight, height: parsedHeight });
      console.log(userInfo);
      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      Alert.alert('Error', `Failed to update profile: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Main')}>
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={styles.headerTitle}>My Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.changeButton} onPress={() => navigation.navigate('UserSelect')}>
          <Ionicons name="person" size={24} color="white" />
          <Text style={styles.headerTitle}>Change User</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profilePictureContainer}>
            <Image source={{ uri: 'https://via.placeholder.com/294x168' }} style={styles.profilePicture} />
          </View>
          
          <View style={styles.profileDetailsContainer}>
            <View style={styles.profileDetail}>
              <Text style={styles.profileDetailValue}>{weight} kg</Text>
              <Text style={styles.profileDetailLabel}>Weight</Text>
            </View>
            <View style={styles.profileDetail}>
              <Text style={styles.profileDetailValue}>{age}</Text>
              <Text style={styles.profileDetailLabel}>Age</Text>
            </View>
            <View style={styles.profileDetail}>
              <Text style={styles.profileDetailValue}>{height} cm</Text>
              <Text style={styles.profileDetailLabel}>Height</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
            <Text>{dob.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={handleDateChange}
              maximumDate={new Date()}
            />
          )}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Weight</Text>
          <TextInput
            style={styles.input}
            value={weight}
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Height</Text>
          <TextInput
            style={styles.input}
            value={height}
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
          />
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Update Profile</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/28' }} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/25' }} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/25' }} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Image source={{ uri: 'https://via.placeholder.com/32' }} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212020',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#212020',
  },
  backButton: {
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeButton: {
    marginLeft: 'auto', // Align this button to the right
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  scrollContainer: {
    paddingBottom: 70, // To ensure the last element is not hidden behind the footer
  },
  profileHeader: {
    backgroundColor: '#B3A0FF',
    height: 289,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  profilePictureContainer: {
    width: 125,
    height: 125,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    position: 'absolute',
    top: 188,
    left: 224,
  },
  iconBackground: {
    width: 27,
    height: 27,
    backgroundColor: '#373737',
    borderRadius: 9999,
  },
  iconContent: {
    width: 12.15,
    height: 17.55,
    position: 'absolute',
    left: 7.43,
    top: 4.72,
    borderWidth: 1,
    borderColor: '#252525',
  },
  profileDetailsContainer: {
    marginTop: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 10,
    borderRadius: 10,
  },
  profileDetail: {
    alignItems: 'center',
  },
  profileDetailValue: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  profileDetailLabel: {
    color: '#B3A0FF',
    fontSize: 14,
    fontWeight: '400',
  },
  inputGroup: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  label: {
    color: '#896CFE',
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E9F6FE',
    paddingHorizontal: 10,
    height: 45,
    justifyContent: 'center',
  },
  saveButton: {
    backgroundColor: '#373737',
    borderRadius: 100,
    marginVertical: 20,
    paddingVertical: 15,
    marginHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#232323',
    fontSize: 17,
    fontWeight: '600',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 59,
    backgroundColor: '#B3A0FF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  footerButton: {
    padding: 10,
  },
  footerIcon: {
    width: 28,
    height: 28,
  },
});

export default EditUserScreen;
