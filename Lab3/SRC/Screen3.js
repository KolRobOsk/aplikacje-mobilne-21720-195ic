import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';

const Screen3 = ({ navigation, route }) => {
    const [selection, setSelection] = useState(1);
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
          title="Ekran4"
          onPress={() =>
            navigation.navigate('Screen4', { name: 'Screen4' })
          }
          />
         <ActivityIndicator />

          <Text>

          </Text>
            </View>
        </SafeAreaView >
    );
}
export {Screen3};