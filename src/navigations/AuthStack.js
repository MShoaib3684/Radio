import React from 'react';
import { ForgotPassword, Login, Radio, ResetPassword, Signup } from "..";
import TabRoutes from './TabRoutes';


export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="TabRoutes" component={TabRoutes} />
        </>
    )
} 