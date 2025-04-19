import React, { useEffect, useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeText from '@/Components/Ui/ThemeText'
import InputText from '@/Components/Ui/InputText'
import DropdownComp from '../Components/DropdownComp'
import { useNavigation } from 'expo-router';

const Home = () => {
    const navigation = useNavigation()
    const [cours, setCours] = useState()
    const [vize, setVize] = useState(0)
    const [final, setFinal] = useState(0)
    const [output, setOutput] = useState(0)
    const [selected, setSelected] = useState()
    const [cent, setCent] = useState(0)
    const [cent2, setCent2] = useState(0)
    const data = [
        { label: '1', value: '10,30' },
        { label: '2', value: '20,80' },
        { label: '3', value: '40,60' },
        { label: '4', value: '30,60' },

    ]
    const onSelect = (item) => {
        console.log('item', item)


        if (item == "10,30") {
            const newcent = 10
            const newcent2 = 30

            setCent(newcent)
            setCent2(newcent2)
            console.log("birinci yüzde", cent)
            console.log("ikinci yüzde", cent2)

        }
        else if (item == "20,80") {
            const newcent = 20
            const newcent2 = 80

            setCent(newcent)
            setCent2(newcent2)
            console.log("birinci yüzde", cent)
            console.log("ikinci yüzde", cent2)
        }
        else if (item == "40,60") {
            const newcent = 40
            const newcent2 = 60

            setCent(newcent)
            setCent2(newcent2)
            console.log("birinci yüzde", cent)
            console.log("ikinci yüzde", cent2)
        }
        else if (item == '30,60') {
            const newcent = 30
            const newcent2 = 60

            setCent(newcent)
            setCent2(newcent2)
            console.log("birinci yüzde", cent)
            console.log("ikinci yüzde", cent2)
        }
    }
    const calculate = () => {
        const newvize = vize * cent / 100
        const newfinal = final * cent2 / 100
        console.log('ilk yüzde', cent)
        console.log('ikinci yüzde', cent2)
        console.log(newvize)
        console.log(newfinal)
        const newoutput = newvize + newfinal
        console.log('yeni çıktı', newoutput)
        setOutput(newoutput)



        if (vize > 0 || final > 0 || cours != '' || selected != '') {
            navigation.navigate("Output", {
                cours: cours,
                vize: vize,
                final: final,
                output: newoutput,
                setCours,
                setVize,
                setFinal,
                setSelected
            })
            setCent(0)
            setCent2(0)
            setSelected('Seçiniz')
        }
        else {
            Alert.alert("Hata", 'Lütfen Boş Kalan yerleri doldurunuz')
        }
    }
    useEffect(() => {
        setCours('')
        setVize('')
        setFinal('')
        setOutput('')
        setSelected('')
        navigation.navigate('Home')

    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ThemeText type='header'>Vize Final Hesaplama</ThemeText>
            <View style={styles.fixTo}>
                <View style={styles.Input}>
                    <ThemeText type='input'>Ders *</ThemeText>
                </View>
                <InputText value={cours} onChangeText={(e) => setCours(e)} keyboardtype='keyboard' />
                <View style={styles.Input}>
                    <ThemeText type='input'>Yüzde *</ThemeText>
                </View>
                <View style={styles.list}>
                    <DropdownComp options={data} onSelect={onSelect} />
                </View>

                <View style={styles.Input}>
                    <ThemeText type='input'>Vize *</ThemeText>
                </View>
                <InputText value={vize} onChangeText={(e) => setVize(e)} keyboardtype='phone-pad' />

                <View style={styles.Input}>
                    <ThemeText type='input'>Final *</ThemeText>
                </View>
                <InputText value={final} onChangeText={(e) => setFinal(e)} keyboardtype='phone-pad' />



            </View>

            <View style={styles.calculation}>
                <Button title='Hesapla' color="#78696b" onPress={() => calculate()}></Button>
            </View>
            <View style={styles.output} >
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        position: "absolute",
        left: 58,

    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
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
    calculation: {
        position: "relative",
        justifyContent: "center",
        textAlign: "center",
        top: 105,
        width: 90,

    },
    Input: {
        position: "relative",
        right: 104
    },
    output: {
        paddingVertical: 180
    },
    list: {
        textAlign: 'center',
        marginVertical: 8,
        backgroundColor: "#928284",
        borderRadius: 9,

    }

});

export default Home;