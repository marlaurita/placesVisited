import React from "react";
import { View, Text, Button } from "react-native";
import { styles } from "./styles";
import ImageSelector from "../../components/ImageSelector";
import { useDispatch } from "react-redux";
import { addPlace } from "../../store/actions/place.action";

const PlaceAddScreen = () => {
  const dispatch = useDispatch();

  const onHandleSubmit = () => {
    dispatch(addPlace());
  }
  return (
    <View style={styles.container}>
        <ImageSelector onImage={(image) => console.log(image)}/>
        <Button 
          title="Guardar Lugar"
          onPress={onHandleSubmit}
        />
    </View>
  );
};

export default PlaceAddScreen;