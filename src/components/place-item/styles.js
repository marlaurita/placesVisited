import { StyleSheet } from "react-native";
import {colors} from "../../constants/themes/colors";

export const styles = StyleSheet.create({
    container: {
        margin: 20,
        height: 75,
        borderBottomWidth: 1,
        borderBottomColor: colors.primary,
    }, 
    containerTouchable: {
        flex: 1, 
        alignItems: "center",
        padding: 10,
        flexDirection: 'row'
      },
      name: {
        fontSize: 14,
        color: colors.secondary,
      },
    image: {
      height: '100%',
      width: 50,
      marginRight: 15
    },
});