import { View, StyleSheet, Button, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-web';
import ThemeText from '@/Components/Ui/ThemeText';
import { useNavigation } from 'expo-router';

const Output = ({ route }) => {
    const { cours, vize, final, output, setCours, setFinal, setVize, setSelected } = route.params
    const [error, setError] = useState("")
    console.log('output', output)
    const navigation = useNavigation()
    console.log(error)
    const handlehome = () => {
        navigation.navigate('Home')
        setCours('')
        setVize(0)
        setFinal(0)
        setSelected(null)

    }
    useEffect(() => {
        if (output >= 50) {
            console.log("kaldımı geçtimi:", output)
            const newerror = "Geçtiniz"
            setError(newerror)
            console.log('err1:', error)
        }
        else {
            const newerror = "Kaldınız"
            setError(newerror)
            console.log('err2:', error)

        }
    }, [])

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.outputs}>
                    <View style={styles.title}>
                        <ThemeText type="header">Sonucunuz</ThemeText>
                    </View>

                    <ThemeText type="header">Ders: <ThemeText type='input'>{cours}</ThemeText></ThemeText>
                    <Text></Text>
                    <ThemeText type="header">Vize: <ThemeText type='input'>{vize}</ThemeText></ThemeText>
                    <Text></Text>
                    <ThemeText type="header">Final: <ThemeText type='input'>{final}</ThemeText></ThemeText>
                    <Text></Text>
                    <ThemeText type="header">Sonuç: <ThemeText type='input'>{output}</ThemeText></ThemeText>
                    <Text></Text>

                    <Text style={error == 'Geçtiniz' ? styles.succses : styles.failed}>{error}</Text>


                </View>

                <View style={styles.outbutton}>
                    <Button title='Geri Dön' color="#78696b" onPress={() => handlehome()}></Button>
                </View>
            </View>


        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        position: "absolute",
        left: 90,
        marginHorizontal: 1,
        paddingHorizontal: 2,
        marginVertical: 250,
        paddingVertical: 2,
    },
    title: {
        textAlign: 'center',
        alignItems: 'center',
        bottom: 80
    },
    succses: {
        color: '#2ff50c',
        fontFamily: "Bradley had",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center"
    },
    failed: {
        color: '#f50c0c',
        fontFamily: "Bradley had",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center"
    },
    fixTo: {
        top: 80
    },
    button: {
        marginHorizontal: 1,
        paddingHorizontal: 2,
        marginVertical: 9,
        paddingVertical: 2,

    },
    outputs: {
        position: "absolute",
        justifyContent: "center",
        textAlign: "center",
        top: -120,
        left: 50,

    },
    outbutton: {
        position: "absolute",
        justifyContent: "center",
        textAlign: "center",
        top: 195,
        left: 60,
        width: 90,


    },

    Input: {
        position: "relative",
        right: 109
    },
    output: {
        paddingVertical: 180
    },


});
export default Output