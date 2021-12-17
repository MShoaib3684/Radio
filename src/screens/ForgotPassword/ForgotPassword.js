import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';


const ForgotPassword = ({ navigation }) => {
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
            <View Style={{ flex: 1, }}>
                <Text style={{ fontSize: 20, fontWeight: '700', alignSelf: 'center', }}>Forgot Password?</Text>
            </View>
            <View style={styles.textInput} >
                <Text style={{ fontWeight: '300', alignSelf: 'center', marginBottom: 20 }}>Enter Email for Verification Code </Text>
                <InputText
                    placeHolder="Email"
                    onChangeText={(email) => updateState({ email })}
                />

            </View>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                <ButtonWithLoader
                    text="Send code"
                    onPress={() => navigation.navigate('ResetPassword')}
                // onPress={onLogin}
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

export default ForgotPassword;
