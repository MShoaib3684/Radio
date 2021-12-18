import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './MainStack';
import AuthStack from './AuthStack';


import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import TabRoutes from './TabRoutes';


const Stack = createNativeStackNavigator();


export default function Routes({ navigation }) {
    return (
        // <SafeAreaView>
        <SafeAreaProvider>
            <NavigationContainer >
                <Stack.Navigator screenOptions={{ header: () => null }} >
                    {true ? MainStack(Stack)
                        : AuthStack(Stack)
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        // </SafeAreaView>
    );
}
