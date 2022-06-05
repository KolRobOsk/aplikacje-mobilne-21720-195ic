import { Dimensions, StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    btnGroup: {
        alignItems: "center",
        width: Dimensions.get('window').width,
    },
    btnText: {
        textAlign: 'center',
    }
});
export default styles;