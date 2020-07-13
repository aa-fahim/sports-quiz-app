import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IntroScreen from './screens/IntroScreen.js';
import QuestionScreen from './screens/QuestionScreen.js';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='IntroScreen'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='IntroScreen' component={IntroScreen}/>
        <Stack.Screen name='QuestionScreen' component={QuestionScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


