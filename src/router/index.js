import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Home, Tambah,Edit } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Tambah" component={Tambah}  />
            <Stack.Screen name="Detail" component={Detail}  />
            <Stack.Screen name="Edit" component={Edit}  />
        </Stack.Navigator>
    );
};

export default Router;
