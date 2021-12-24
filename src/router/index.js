import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Tambah } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Tambah" component={Tambah}  />
        </Stack.Navigator>
    );
};

export default Router;
