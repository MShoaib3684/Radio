import React from 'react';
// import { Home, Profile } from "..";
import TabRoutes from './TabRoutes';
// import { TabRoutes } from '../navigations/TabRoutes';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Home" component={TabRoutes} />
            {/* <Stack.Screen name="Profile" component={Profile} /> */}

        </>
    )
} 