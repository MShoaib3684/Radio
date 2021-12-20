import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

            <View style={styles.textInput} >
                <View Style={{ flex: 1 }}>
                    <Text
                        style={{ fontSize: 20, fontWeight: '700', alignSelf: 'center', bottom: 50 }}>
                        Forgot Password?
                    </Text>
                </View>
                <Text style={{ fontWeight: '300', alignSelf: 'center', marginBottom: 20, color: 'black' }}>Enter Email for Verification Code </Text>
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
        margin: 50,
        backgroundColor: 'white'
    },
    inputIcon: {

        position: 'absolute',
    },
    icon: {
        alignSelf: 'flex-start',
        marginLeft: 15,
        top: 10
    }
});

export default ForgotPassword;
