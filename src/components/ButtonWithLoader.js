import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const ButtonWithLoader = ({
    text,
    onPress,

}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btnStyle}>
            <Text style={styles.textstyle}>{text}</Text>
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
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 15,
    },
    textstyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'white'
    },
})
