import react from "react";
import {Text, Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./main";
import { colors } from "../constants/themes/colors";
import AddNavigator from "./add";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text
      style={{
        color: focused ? colors.primary : colors.secondary,
      }}
    >
      {label}
    </Text>
  );

const TabNavigator = () => {
    return(
        <BottomTabs.Navigator initialRouteName="Categorias" screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true
          }}>
            <BottomTabs.Screen name="CategoriesTab" component={MainNavigator} 
            options={{tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Categorias") ,  tabBarIcon: () => (<Image source={require("../../assets/categoria.png")} style={{width: 20, height: 20}}/>)}} >
            </BottomTabs.Screen>
            <BottomTabs.Screen name="AddTab" component={AddNavigator} 
            options={{tabBarLabel:  ({ focused }) => LabelBottomTab(focused, "Agregar lugar") , tabBarIcon: () => (<Image source={require("../../assets/boton-circular-plus.png")} style={{width: 20, height: 20}}/>)}}>

            </BottomTabs.Screen>

        </BottomTabs.Navigator>
    )
}

export default TabNavigator;