import React from "react";
import { createNativeStackNavigator} from "@react-navigation/native-stack";

import {Splash, Login, Register, Welcome} from "../pages";

const Stack =  createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash}
            options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
            <Stack.Screen name="Welcome" component={Welcome}
            options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    );
};

export default Router;