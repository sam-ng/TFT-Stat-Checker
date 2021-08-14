import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import Home from './src/screens/home/home';
import Screen2 from './src/screens/screen2';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Screen2' component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
