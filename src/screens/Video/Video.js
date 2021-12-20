import React, { useState } from "react";
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/color';
import VideoPlayer from 'react-native-video-player';
import video from 'react-native-video';

import { Card } from 'react-native-material-cards'

const DATA = [
    {
        id: "1",
        URL: "https://www.youtube.com/watch?v=juIcenNQWLs.mp4",
        name: "ali"
    },
    {
        id: "2",
        URL: "https://www.youtube.com/watch?v=juIcenNQWLs.mp4",
        name: "ali"
    },
    {
        id: "3",
        URL: "https://www.youtube.com/watch?v=juIcenNQWLs.mp4",
        name: "ali"
    },
    {
        id: "4",
        URL: "https://www.youtube.com/watch?v=juIcenNQWLs.mp4",
        name: "ali"
    },
    {
        id: "5",
        URL: "https://www.youtube.com/watch?v=juIcenNQWLs.mp4",
        name: "ali"
    },
    {
        id: "6",
        URL: "https://www.youtube.com/watch?v=juIcenNQWLs.mp4",
        name: "ali"
    },
];


const Video = ({ navigation }) => {


    return (

        <View style={{ flex: 1, backgroundColor: '' }}>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({ item, index }) => {
                    return (

                        <ScrollView>
                            <Card >
                                <View style={{ flex: 1, backgroundColor: 'green', maxWidth: "100%", alignSelf: 'center' }}>
                                    <VideoPlayer video={{ uri: item.URL }}
                                        autoplay={false}
                                        defaultMuted={true}
                                        // videoHeight={1300}
                                        videoWidth={1000}
                                        thumbnail={require('../../assets/tn.png')}
                                    />
                                </View>
                            </Card>
                        </ScrollView>

                    )

                }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    title1: {
        fontSize: 14,
        color: COLORS.light,
    },
    btnPrimary: {
        backgroundColor: COLORS.code,
        color: "#fff",
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'flex-end',
        justifyContent: 'center',
        borderRadius: 10,
        height: 22,
        width: 60,
    },
    text: {
        marginTop: "1%",
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        paddingLeft: "0%",
    },
    inputIcon: {
        marginTop: "2%",
        position: 'relative',
        marginLeft: "2%",

    },
    img: {
        position: 'absolute',
        width: 100,
        height: 100,
        resizeMode: "contain"
    }
});

export default Video;