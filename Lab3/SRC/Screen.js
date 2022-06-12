import React, { useState } from 'react';
import { Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import styles from './Styles.js';
import {GetRandom} from './Randy.js';
let numListNSort = new Map();
let numList = new Map();
let i = 0;
let ran = 0;
for (i; i<=100; i++){
    ran = GetRandom(0, 1000);
    numList.set(i, ran);
    numListNSort.set(i, ran);
}
let numListStr = "Lista Przed Zmianami = {";
numList.forEach((value, key, numList)=>{
    numListStr+=value+" ";
});
numListStr+="}";
numListSort = new Map();
let top=100;
let j;
let skip = [];
let sortval, sortid;
for (i=0;i<=top;i++){
     j=0;
     sortid = 0;
     sortval = numListNSort.get(j);
     for (j;j<=numListNSort.size;j++){
     if (numListNSort.get(j)!=undefined){
        if (numListNSort.get(j)<=sortval || sortval==undefined){
            sortid = j;
            sortval = numListNSort.get(j);
            }
    }
    }
        if (sortval == undefined){
            break;
        }
        numListSort.set(i, sortval);
        numListNSort.delete(sortid);
}
let numListSortStr="\nLista Posortowana i Przefiltrowana = {";
numListSort.forEach((value, key, numListSort)=>{
    numListSortStr+=value+" ";
});
numListSortStr+="}"
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
            <Text>{numListStr}
            {numListSortStr}
            </Text>
            </View>
         </SafeAreaView >
     );
 }
export {Screen};