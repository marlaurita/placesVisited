import React from "react";
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "../constants/themes/colors";
import { PlacesListScreen, PlaceDetailScreen, CategoriesScreen, PlaceAddScreen } from "../screens";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === "ios";
const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Categorias" screenOptions={{
            headerStyle: {
                backgroundColor: isIOS? colors.secondary : colors.primary,
            },
            headerTintColor: isIOS ? colors.black : colors.white,
            /*headerTitleStyle: {
                fontFamily: 'nunito',
            }*/
        }}>
            <Stack.Screen name="Categorias" component={CategoriesScreen} options= {{headerShown: false}}/>
            <Stack.Screen name="Lista de lugares" component={PlacesListScreen}/>
            <Stack.Screen name="Detalle" component={PlaceDetailScreen}/>
        </Stack.Navigator>
    )
}

export default MainNavigator;