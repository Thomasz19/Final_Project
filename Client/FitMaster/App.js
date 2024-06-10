import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './UserContex';  // Import UserProvider
import NameScreen from './screens/NameScreen';
import GenderSelectionScreen from './screens/GenderSelectionScreen';
import HeightScreen from './screens/HeightScreen';
import WeightScreen from './screens/WeightScreen';
import AgeScreen from './screens/AgeScreen';
import HomeScreen from './screens/HomeScreen';
import MainScreen from './screens/MainScreen'; // Import MainScreen
import UserSelectScreen from './screens/UserSelectScreen'; // Import UserSelectScreen
import UserEditScreen from './screens/UserEditScreen';

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