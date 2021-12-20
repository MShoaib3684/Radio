import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Radio = ({ navigation }) => {
    return (

        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
            <Image style={{ height: 250, wigth: 100 }}
                source={require('../../assets/logo.png')}
            />

            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginBottom: 10, }}>After the Mirage</Text>

                <Text style={{ fontSize: 16, color: 'grey' }}>Mystery of the Spanish Headmaster</Text>
                <View style={{ flexDirection: 'row', margin: 20 }}>
                    <Icon
                        name="mic"
                        color='grey'
                        size={25}
                        style={styles.inputIcon}
                    />
                    <Text style={{ fontSize: 16, color: 'grey' }}>Jane Doe</Text>
                </View>
                <Icon
                    name="play-circle-filled"
                    color='grey'
                    size={100}
                    style={styles.inputIcon}
                />
            </View>
        </View>
    )
}

export default Radio

const styles = StyleSheet.create({})
