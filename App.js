import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Home from './src/screens/home/home';
import Summoner from './src/screens/summoner';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Summoner' component={Summoner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
