import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/themes/colors";
import { PlacesListScreen, PlaceAddScreen } from "../screens";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";
const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Lista de lugares" screenOptions={{
            headerStyle: {
                backgroundColor: isIOS? colors.secondary : colors.primary,
            },
            headerTintColor: isIOS ? colors.black : colors.white,
            /*headerTitleStyle: {
                fontFamily: 'nunito',
            }*/
        }}>
            <Stack.Screen name="Lista de lugares" component={PlacesListScreen} options= {{headerShown: false}}/>
            <Stack.Screen name="Agregar lugar" component={PlaceAddScreen} options={{title: "Pan disponible"}}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;