
import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import onBoardingScreen from '../Screens/onBoardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='onboarding'
        component={onBoardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Login'
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name='Welcome'
        component={WelcomeScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>

  );
}




export default AuthStack;

