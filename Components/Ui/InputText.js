import { View, Text, StyleSheet, } from 'react-native'
import React, { FC } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'



const InputText = ({ value, onChangeText, secureTextEntry, keyboardtype }) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textinput} onChangeText={onChangeText} value={value} secureTextEntry={secureTextEntry} keyboardType={keyboardtype} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 48,
        width: 275,
        borderRadius: 9,
        backgroundColor: "#928284",
        justifyContent: "center",
        marginBottom: 8
    },
    textinput: {
        padding: 5,
        fontSize: 20,
        marginHorizontal: 9,
        color: ""
    }
})
export default InputText