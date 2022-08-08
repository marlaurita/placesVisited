import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/themes/colors";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  picker: {
    height: 50,
    width: 180,
    borderWidth: 1,
    borderBottomColor: 'red',

  },
  input: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
    borderColor: colors.secondary,
    borderWidth: 1
  },
  text: {
    alignSelf: 'center',
},
});