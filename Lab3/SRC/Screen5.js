import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';

const Screen5 = ({ navigation, route }) => {
    const [selection, setSelection] = useState(1);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
        <Button
             title="Ekran4"
             onPress={() =>
               navigation.navigate('Screen4', { name: 'Screen4' })
               }
            />
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>

          </Text>
            </View>
        </SafeAreaView >
    );
}
export {Screen5};