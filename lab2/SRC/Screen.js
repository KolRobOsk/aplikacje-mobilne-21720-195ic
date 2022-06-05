import React, { useState } from 'react';
import { Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';
const Screen = ({ navigation, route }) => {
     return (
         <SafeAreaView style={styles.container}>
             <View style={styles.btnGroup}>
         <Button
           title="Ekran2"
           onPress={() =>
             navigation.navigate('Screen2', { name: 'Screen2' })
           }
           />
            <Button
            title="Ekran3"
            onPress={() =>
            navigation.navigate('Screen3', { name: 'Screen3' })
            }
            />
            <Text>
            Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
            </Text>
             </View>
         </SafeAreaView >
     );
 }
export {Screen};