import { StyleSheet } from "react-native";
import {colors} from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        borderRadius: 10,
        margin: 20,
        height: 150,
    }, 
    containerTouchable: {
        flex: 1, 
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      },
      title: {
        fontSize: 20,
        //fontFamily: "Lato-Bold",
      },
});