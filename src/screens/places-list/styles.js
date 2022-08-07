import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/themes/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  }, 
  text: {
    color: colors.secondary,
    marginTop: 20
  }
});