import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const MainScreen = () => (
  <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Image source={require('./assets/Group.png')} style={styles.image} />
      <Image source={require('./assets/FITBODY.png')} style={styles.textImage} />
    </View>
    <StatusBar style="auto" />
  </View>
);

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
