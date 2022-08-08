import React, { useState } from "react";
import { ScrollView, View, Text, Button, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { styles } from "./styles";
import ImageSelector from "../../components/ImageSelector";
import { useDispatch } from "react-redux";
import { addPlace } from "../../store/actions/place.action";
import Place from "../../models/Place";
import {categories} from "../../data/categories";
import { colors } from "../../constants/themes/colors";

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

  const clearForm = () => {
    setSelectedValue(1);
    setName("");
    onHandleImageSelect("");
    setDescription("");
  }; 

  const onHandleSubmit = () => {
    if (name !== "" && description!=="") {
      const newPlace = new Place(Date.now(), selectedValue, name, description, image);
      dispatch(addPlace(newPlace));
      clearForm();
    }
  };
  return (
    <ScrollView style={styles.container}>
      <ImageSelector onImage={onHandleImageSelect}/>
        <View style={styles.category}>
          <Text>Seleccione Tipo de Lugar: </Text>
          <Picker selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}>
            { 
            categories.map(category => 
              <Picker.Item key={category.id} label={category.title} value={category.id}/>)
            }
          </Picker>
        </View>
        <TextInput style={styles.input} value={name} placeholder="Nombre" onChangeText={onHandleTitleChange}/>
        <TextInput style={styles.input} value={description} placeholder="Breve Descripción" onChangeText={onHandleDescriptionChange}/>
        <Button 
          title="Guardar Lugar"
          onPress={onHandleSubmit}
          color={colors.primary}
        />
    </ScrollView>
  );
};

export default PlaceAddScreen;