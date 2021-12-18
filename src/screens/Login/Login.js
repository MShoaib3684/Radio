import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabRoutes from '../../navigations/TabRoutes';

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
            navigation.navigate('TabRoutes')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.textInput} >
                <View style={styles.icon}>
                    <Icon
                        name="person-outline"
                        color='grey'
                        size={25}
                        style={styles.inputIcon}
                    />
                </View>
                <InputText
                    placeHolder="Email"
                    onChangeText={(email) => updateState({ email })}
                />
                <View style={styles.icon}>
                    <Icon
                        name="lock-outline"
                        color='grey'
                        size={25}
                        style={styles.inputIcon}
                    />
                </View>
                <InputText
                    placeHolder="Password"
                    isSecure={isSecure}
                    secureTextEntry={isSecure}
                    onChangeText={(password) => updateState({ password })}
                />
                <Text
                    style={{ alignSelf: 'flex-end', right: 30, color: 'black' }}
                    onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot Password?
                </Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <ButtonWithLoader
                    text="Login"
                    onPress={onLogin}
                />
                <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '300' }}>
                    Dont have an account?
                    <Text onPress={() => navigation.navigate('Signup')}>
                        Sign Up
                    </Text>
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
    },
    inputIcon: {

        position: 'absolute',
    },
    icon: {
        alignSelf: 'flex-start',
        marginLeft: 40,
        top: 10
    }
});

export default Login;
