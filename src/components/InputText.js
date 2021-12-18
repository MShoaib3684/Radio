import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const InputText = ({
    label,
    value,
    placeHolder,
    // InputStyle,
    textStyle,
    isSecure,
    onChangeText,
    ...props
}) => {
    return (
        <View style={{ marginBottom: 16 }}>
            <TextInput
                value={value}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                placeholderTextColor="gray"
                {...props}
            />
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({

    inputStyle: {
        paddingLeft: 40,
        height: 50,
        width: 300,
        borderWidth: 1.5,
        borderColor: 'grey',
        color: 'black',

    }
})
