import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Screen} from './SRC/Screen.js';
import {Screen2} from './SRC/Screen2.js';
import {Screen3} from './SRC/Screen3.js';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen"
          component={Screen}
          options={{ title: 'Lab2 21720 1' }}
        />
        <Stack.Screen
        name="Screen2"
        component={Screen2}
        options={{ title: 'Lab2 21720 2' }}
         />
        <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{ title: 'Lab2 21720 3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

