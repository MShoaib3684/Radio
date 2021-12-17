import React from 'react';
import { ForgotPassword, Login, ResetPassword, Signup } from "..";


export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />

        </>
    )
} 