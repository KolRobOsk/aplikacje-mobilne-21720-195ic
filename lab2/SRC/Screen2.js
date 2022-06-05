import React, { useState } from 'react';
import { Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';

const Screen2 = ({ navigation, route }) => {
    const [selection, setSelection] = useState(1);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
        <Button
             title="Ekran"
             onPress={() =>
               navigation.navigate('Screen', { name: 'Screen' })
               }
            />
        <Button
          title="Ekran3"
          onPress={() =>
            navigation.navigate('Screen3', { name: 'Screen3' })
          }
          />
          <Text>
          Rest parameters
          The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
          </Text>
            </View>
        </SafeAreaView >
    );
}
export {Screen2};