import react from "react";
import {Text} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainNavigator from "./main";
import { colors } from "../constants/themes/colors";
import AddNavigator from "./add";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text
      style={{
        color: focused ? colors.primary : colors.secondary,
        //fontFamily: focused ? "Lato-Bold" : "Lato-Regular",
      }}
    >
      {label}
    </Text>
  );

const TabNavigator = () => {
    return(
        <BottomTabs.Navigator initialRouteName="Categorias" screenOptions={{
            headerShown: false,
          }}>
            <BottomTabs.Screen name="CategoriesTab" component={MainNavigator} 
            options={{tabBarLabel: ({ focused }) => LabelBottomTab(focused, "Categorias")}}>
            </BottomTabs.Screen>
            <BottomTabs.Screen name="AddTab" component={AddNavigator} 
            options={{tabBarLabel:  ({ focused }) => LabelBottomTab(focused, "Agregar lugar")}}>

            </BottomTabs.Screen>

        </BottomTabs.Navigator>
    )
}

export default TabNavigator;