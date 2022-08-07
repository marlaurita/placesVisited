import { StyleSheet, Dimensions } from "react-native";
import {colors} from "../../constants/themes/colors"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  image: {
    height: 200,
  },
  textLabel: {
    color: colors.primary,
    fontSize: 24,
    marginTop: 15,
    marginHorizontal: 20
  },
  textValue: {
    color: colors.secondary,
    fontSize: 20,
    marginBottom: 15,
    marginHorizontal: 20
  },
});