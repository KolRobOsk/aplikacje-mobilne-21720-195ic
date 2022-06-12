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
import {Screen4, Screen4_1} from './SRC/Screen4.js';
import {Screen5} from './SRC/Screen5.js';
const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Screen"
          component={Screen}
          options={{ title: 'Lab3 21720 1' }}
        />
         <Stack.Screen
        name="Screen2"
        lazy={true}
        component={Screen2 }
        options={{ title: 'Lab3 21720 2' }}
         />
        <Stack.Screen
        name="Screen3"
        component={Screen3}
        options={{ title: 'Lab3 21720 3' }}
        />
        <Stack.Screen
         name="Screen4"
         component={Screen4}
         options={{ title: 'Lab3 21720 4' }}
         />
       <Stack.Screen
       name="Screen5"
       component={Screen5}
       options={{ title: 'Lab3 21720 5' }}
       />
      </Stack.Navigator>
   </NavigationContainer>
);
};

export default MyStack;

