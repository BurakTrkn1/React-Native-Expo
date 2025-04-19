import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const ThemeText = ({ children, type, }) => {
    return (
        <Text style={styles.headtext}>
            {type === 'header' ?
                <Text >{children}</Text>

                :
                <Text style={type === "input" ? styles.input : styles.headtext}>{children}</Text>


            }

        </Text>
    )
}
const styles = StyleSheet.create({
    headtext: {
        fontFamily: "Bradley had",
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        justifyContent: "center"
    },
    basetext: {
        fontFamily: "Bradley had",
        fontSize: 10,
        textAlign: "center",
        justifyContent: "center",
        color: "#ededed"
    },
    input: {
        fontFamily: "Bradley had",
        fontSize: 20,
        fontWeight: "",
        textAlign: "center",
        justifyContent: "center",
    }
})
export default ThemeText