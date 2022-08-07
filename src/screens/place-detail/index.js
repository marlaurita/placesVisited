import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";

const PlaceDetailScreen = () => {
  const place = useSelector((state) => state.place.selected);
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:place.image}} style={styles.image} />
      <Text style={styles.textLabel}>Nombre: </Text>
      <Text style={styles.textValue}>{place.name}</Text>
      <Text style={styles.textLabel}>Descripción: </Text>
      <Text style={styles.textValue}>{place.description}</Text>
    </View>
  );
};

export default PlaceDetailScreen;