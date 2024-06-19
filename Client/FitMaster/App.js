/**
 * App.js
 *
 * This is the main entry point for the React Native application. It sets up the navigation stack and wraps the
 * application in the UserProvider context to manage and share user state across the app.
 *
 * The App component initializes the splash screen, sets up the navigation container, and defines the navigation
 * stack for the app, including screens for user selection, user information input, and the main screen.
 *
 * The UserProvider component from UserContext is used to wrap the application, ensuring that all components have
 * access to the user state and functions for updating and submitting user information.
 *
 * Usage:
 * - The app starts with the UserSelectScreen to allow users to select an existing user or add a new one.
 * - Other screens include NameScreen, GenderSelectionScreen, HeightScreen, WeightScreen, AgeScreen, and MainScreen.
 * - Ensure the necessary screens are imported and added to the navigation stack.
 *
 * Author: [Thomas Zoldowski]
 * Date: [6/9/2024]
 */

import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './UserContext';  
//Importing All the Screens
import NameScreen from './screens/NameScreen';
import GenderSelectionScreen from './screens/GenderSelectionScreen';
import HeightScreen from './screens/HeightScreen';
import WeightScreen from './screens/WeightScreen';
import AgeScreen from './screens/AgeScreen';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen'; 
import UserSelectScreen from './screens/UserSelectScreen'; 
import UserEditScreen from './screens/UserEditScreen';
import WorkoutScreen from './screens/WorkoutScreen';
import ExerciseSelectionScreen from './screens/ExerciseSelectionScreen';
import ExerciseDetailScreen from './screens/ExerciseDetailScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Artificial delay for splash screen (can be removed)
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserSelect">
          <Stack.Screen
            name="UserSelect"
            component={UserSelectScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Name"
            component={NameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Height"
            component={HeightScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Weight"
            component={WeightScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="GenderSelection"
            component={GenderSelectionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Age"
            component={AgeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="UserEdit"
            component={UserEditScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Workout"
            component={WorkoutScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Exercise"
            component={ExerciseSelectionScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExerciseDetail"
            component={ExerciseDetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 50,
    width: '100%',
    maxWidth: 480,
    borderRadius: 24,
    borderColor: '#fff',
    borderWidth: 1,
    backgroundColor: '#232323',
  },
  image: {
    width: 136,
    height: 63,
    aspectRatio: undefined,
    alignSelf: 'center',
    marginTop: 10,
  },
  textImage: {
    width: 170,
    height: 30,
    aspectRatio: undefined, // Adjust aspect ratio based on the actual dimensions of the image
    alignSelf: 'center',
    marginTop: 10,
  },
});