import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routNames} from '../../constants/routNames';
import LoginScreen from '../../screens/AuthLayer/Login';
import SignUpScreen from '../../screens/AuthLayer/SignUp';
import ForgotScreen from '../../screens/AuthLayer/Forgot';
import CodeVerificationScreen from '../../screens/AuthLayer/CodeVerfiication';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{headerShown: false, animationEnabled: true, gestureDirection: 'horizontal',}}
        >
            {/*<Stack.Screen name={routNames.LOGIN} component={LoginScreen}/>*/}
            {/*<Stack.Screen name={routNames.REGISTRATION} component={SignUpScreen}/>*/}
            {/*<Stack.Screen name={routNames.FORGOT} component={ForgotScreen}/>*/}
            <Stack.Screen name={routNames.CODE_VERIFICATION} component={CodeVerificationScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
