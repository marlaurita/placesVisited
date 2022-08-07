import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    borderBottomColor: '#E88EED',
    borderBottomWidth: 1,
    marginBottom: 20,
    padding: 5,
  },
});