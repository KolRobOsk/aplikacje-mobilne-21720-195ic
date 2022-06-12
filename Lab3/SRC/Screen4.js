import React, { useState } from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';
import { ProgressBar, Step } from "react-step-progress-bar";

const step1Content = <h1>Step 1 Content</h1>;
const step2Content = <h1>Step 2 Content</h1>;
const step3Content = <h1>Step 3 Content</h1>;
function onFormSubmit() {
  // handle the submit logic here
  // This function will be executed at the last step
  // when the submit button (next button in the previous steps) is pressed
}
function step2Validator() {
  // return a boolean
}

function step3Validator() {
  // return a boolean
}
const Screen4 = ({ navigation, route }) => {
    const [selection, setSelection] = useState(1);
    return(
    <SafeAreaView style={styles.container}>
            <View style={styles.btnGroup}>
        <Button
             title="Ekran3"
             onPress={() =>
               navigation.navigate('Screen3', { name: 'Screen3' })
               }
            />
        <Button
          title="Ekran5"
          onPress={() =>
            navigation.navigate('Screen5', { name: 'Screen5' })
          }
          />
          <ActivityIndicator size="small" color="#19ff00" />
            </View>
        </SafeAreaView >
);
}

export {Screen4};