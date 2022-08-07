import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text } from "react-native";
import { styles } from "./styles";

const PlaceDetailScreen = () => {
  const dispatch = useDispatch();
  const place = useSelector((state) => state.place.selected);
  return (
    <View style={styles.container}>
        <Text> {place.name}</Text>
    </View>
  );
};

export default PlaceDetailScreen;