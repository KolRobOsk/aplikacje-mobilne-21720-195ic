import React, { useState } from 'react';
import { Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';

const Screen3 = ({ navigation, route }) => {
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
          title="Ekran2"
          onPress={() =>
            navigation.navigate('Screen2', { name: 'Screen2' })
          }
          />
          <Text>
          Hooki są nowym dodatkiem w Reakcie 16.8. Pozwalają one na wykorzystanie stanu i innych funkcjonalności Reacta, bez użycia klas.
          </Text>
            </View>
        </SafeAreaView >
    );
}
export {Screen3};