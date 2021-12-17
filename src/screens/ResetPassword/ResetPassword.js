import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';


const ResetPassword = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, email, password, isSecure } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }




    const onLogin = () => {

        // alert("please Fill your email and Password")
        // if (email == '' || password == '') {
        //     return
        // }

        const checkValid = isValidData()
        if (checkValid) {
            navigation.navigate('Signup')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.textInput} >
                <Text style={{ alignSelf: 'center', color: 'black' }}>Reset Password?</Text>
                <InputText
                    placeHolder="new password"
                    isSecure={isSecure}
                    secureTextEntry={isSecure}
                    onChangeText={(password) => updateState({ password })}
                />
                <InputText
                    placeHolder="confirm new password"
                    isSecure={isSecure}
                    secureTextEntry={isSecure}
                    onChangeText={(password) => updateState({ password })}
                />

            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <ButtonWithLoader
                    text="Login"
                    onPress={onLogin}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    textInput: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 24,
        backgroundColor: 'white'
    }
});

export default ResetPassword;
