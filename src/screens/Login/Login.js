import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';


const Login = ({ navigation }) => {
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
                <InputText
                    placeHolder="Email"
                    onChangeText={(email) => updateState({ email })}
                />
                <InputText
                    placeHolder="Password"
                    isSecure={isSecure}
                    secureTextEntry={isSecure}
                    onChangeText={(password) => updateState({ password })}
                />
                <Text style={{ alignSelf: 'flex-end', color: 'black' }} onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <ButtonWithLoader
                    text="Login"
                    onPress={onLogin}
                />
                <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '300' }}>
                    Dont have an account? Sign Up
                </Text>
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

export default Login;
