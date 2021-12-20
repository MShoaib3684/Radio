import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EditProfile, Home, Profile, Radio, Setting, TV, Video } from '..';
import { Text } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabRoutes = ({ navigation }) => {
    return (
        <BottomTab.Navigator
            barStyle={{ paddingBottom: 50 }}
            tabBar={(tabsProps, barStyle) => (
                <>
                    <BottomTabBar {...tabsProps}{...barStyle} />
                </>
            )}
            initialRouteName="Radio"
        >
            <BottomTab.Screen name="Radio" component={Radio}
                options={{
                    // headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text>RADIO</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon name="radio" size={25}
                            style={{ color: focused ? '#000000' : '#777777', opacity: focused ? 1 : 1 }} />
                    ),
                }}

            />
            <BottomTab.Screen name="Live TV" component={TV}
                options={{
                    // headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text>TV</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon name="tv" size={25}
                            style={{ color: focused ? '#000000' : '#777777', opacity: focused ? 1 : 1 }} />
                    ),
                }}
            />
            <BottomTab.Screen name="Video" component={Video}
                options={{
                    // headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text>VIDEO</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon1 name="file-video" size={25}
                            style={{ color: focused ? '#000000' : '#777777', opacity: focused ? 1 : 1 }} />
                    ),
                }}
            />
            <BottomTab.Screen name="Setting" component={Setting}
                options={{
                    // headerShown: false,
                    tabBarLabel: ({ focused }) => (
                        <Text>SETTING</Text>
                    ),
                    tabBarIcon: ({ focused }) => (
                        <Icon name="settings" size={25}
                            style={{ color: focused ? '#000000' : '#777777', opacity: focused ? 1 : 1 }} />
                    ),
                }}
            />


            {/* <BottomTab.Screen name="Home" component={Home} /> */}
            {/* <BottomTab.Screen name="Profile" component={Profile} /> */}
        </BottomTab.Navigator>

    )
}

export default TabRoutes