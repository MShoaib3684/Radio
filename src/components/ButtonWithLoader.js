import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonWithLoader = ({
    text,
    onPress,
    text1,

}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
            <Text style={styles.textstyle}>{text}</Text>
            <Text style={styles.textstyle1}>{text1}</Text>
        </TouchableOpacity>
    );
};

export default ButtonWithLoader

const styles = StyleSheet.create({
    btnStyle: {
        height: 50,
        width: 300,
        backgroundColor: "#05232D",
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // alignContent: 'center',

        borderRadius: 15,
    },
    textstyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 13


    },
    textstyle1: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        bottom: 37
    },
})
