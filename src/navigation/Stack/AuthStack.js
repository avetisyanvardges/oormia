import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routNames} from 'constants/routNames';
import LoginScreen from '../../screens/AuthLayer/Login';
import ForgotScreen from '../../screens/AuthLayer/Forgot';
import CodeVerificationScreen from '../../screens/AuthLayer/CodeVerfiication';
import UploadPhotoScreen from 'screens/AuthLayer/UploadPhoto';
import FavoriteScreen from 'screens/AuthLayer/Favorite';
import Home from "screens/Home";

const AuthStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{headerShown: false, animationEnabled: true, gestureDirection: 'horizontal',}}
        >
            <Stack.Screen name={routNames.START} component={Home}/>
            <Stack.Screen name={routNames.LOGIN} component={LoginScreen}/>
            <Stack.Screen name={routNames.FORGOT} component={ForgotScreen}/>
            <Stack.Screen name={routNames.CODE_VERIFICATION} component={CodeVerificationScreen}/>
            <Stack.Screen name={routNames.UPLOAD_PHOTO} component={UploadPhotoScreen}/>
            <Stack.Screen name={routNames.FAVORITE} component={FavoriteScreen}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
