import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { styles } from "./styles";
import ImageSelector from "../../components/ImageSelector";
import { useDispatch } from "react-redux";
import { addPlace } from "../../store/actions/place.action";
import Place from "../../models/Place";
import {categories} from "../../data/categories";

const PlaceAddScreen = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(1);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState ("");

  const onHandleTitleChange = (text) => setName(text);
  const onHandleDescriptionChange = (text) => setDescription(text);
  const onHandleImageSelect = (imgUrl) => {
    setImage(imgUrl)
  };

  const onHandleSubmit = () => {
    const newPlace = new Place(Date.now(), selectedValue, name, description, image)
    dispatch(addPlace(newPlace));
  }
  return (
    <View style={styles.container}>
        <Picker selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          { 
          categories.map(category => 
            <Picker.Item key={category.id} label={category.title} value={category.id}/>)
          }
        </Picker>
        <Text>{selectedValue}</Text>
        <TextInput style={styles.input} placeholder="Nombre" onChangeText={onHandleTitleChange}/>
        <TextInput style={styles.input} placeholder="Breve Descripción" onChangeText={onHandleDescriptionChange}/>

        <ImageSelector onImage={onHandleImageSelect}/>
        <Button 
          title="Guardar Lugar"
          onPress={onHandleSubmit}
        />
    </View>
  );
};

export default PlaceAddScreen;