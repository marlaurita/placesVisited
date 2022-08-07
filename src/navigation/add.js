import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PlaceAddScreen } from "../screens";
import { colors } from "../constants/themes/colors";
import { CategoriesScreen } from "../screens";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";
const AddNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Add" screenOptions={{
            headerStyle: {
                backgroundColor: isIOS? colors.secondary : colors.primary,
            },
            headerTintColor: isIOS ? colors.black : colors.white,
            /*headerTitleStyle: {
                fontFamily: 'nunito',
            }*/
        }}>
            <Stack.Screen name="Agregar lugar" component={PlaceAddScreen}/>
            <Stack.Screen name="Categorias" component={CategoriesScreen}/>
        </Stack.Navigator>
    )
}

export default AddNavigator;