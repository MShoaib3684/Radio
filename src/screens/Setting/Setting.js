import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import ButtonWithLoader from '../../components/ButtonWithLoader';
import InputText from '../../components/InputText';
import validator from '../utils/validations';
import { showError } from '../utils/helperFunction';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabRoutes from '../../navigations/TabRoutes';

const Setting = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
    })
    const { isLoading } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))






    return (
        <View style={styles.container}>

            <View style={{ flex: 0.5, backgroundColor: '', flexDirection: 'row' }}>

                <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>

                </View>
                <View style={{ flex: 0.8, backgroundColor: '', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }} > Edit Profile</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>
                    <Icon
                        name="navigate-next"
                        color='black'
                        size={40}
                        style={{ position: 'relative', }}
                    />
                </View>


            </View>

            <View style={{ flex: 0.5, backgroundColor: 'white', flexDirection: 'row' }}>

                <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>

                </View>
                <View style={{ flex: 0.8, backgroundColor: '', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }} > About Us</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flex: 0.1, backgroundColor: '', justifyContent: 'center' }}>
                    <Icon
                        name="navigate-next"
                        color='black'
                        size={40}
                        style={{ position: 'relative', }}
                    />
                </View>

            </View>
            <View style={{ flex: 1, backgroundColor: '' }}>

            </View>



            {/* <View style={{ flex: 1, }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, }}>Edit Profile</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Icon
                            name="arrow-forward"
                            color='black'
                            size={35}
                            style={{ alignSelf: 'auto' }}

                        />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 30, }}>About Us</Text>
                    <Icon
                        name="arrow-forward"
                        color='black'
                        size={35}
                        style={{ justifyContent: 'flex-end' }}
                    />
                </View>
            </View> */}

            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'flex-end', marginBottom: 25 }}>
                <ButtonWithLoader
                    text1="Logout"
                    onPress={() => navigation.navigate('Login')}
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

export default Setting;
