import React, { useState } from "react";
import { ScrollView, View, Text, Button, TextInput, Image, Alert } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { addPlace } from "../../store/actions/place.action";
import Place from "../../models/Place";
import {categories} from "../../data/categories";
import { colors } from "../../constants/themes/colors";
import * as ImagePicker from "expo-image-picker";
import {getPlaces} from '../../store/actions/place.action';

const PlaceAddScreen = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState ("");
  const [pickedUrl, setPickedUrl] = useState("");

  const onHandleTitleChange = (text) => setName(text);
  const onHandleDescriptionChange = (text) => setDescription(text);

  const clearForm = () => {
    setSelectedValue(1);
    setName("");
    setDescription("");
    setPickedUrl("");
  }; 

  const onHandleSubmit = () => {
    if (name !== "" && description!=="") {
      const newPlace = new Place(Date.now(), selectedValue, name, description, pickedUrl);
      dispatch(addPlace(newPlace));
      dispatch(getPlaces());
      clearForm();
      Alert.alert('Guardado exitoso', 'Visita las categorias para conocer nuevos lugares', [{text: "Ok"}]);
    }
  };

  const verifyPermissions = async() => {
    const {status} = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
        Alert.alert('Permisos insuficientes', 'Necesitas permisos para usar la cámara', [{text: "Ok"}]);
        return false;
    }
    return true;
}
  const handleTakeImage = async() => {
    const isCameraPermissionGranted = await verifyPermissions();
    if (!isCameraPermissionGranted) return;

    const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16,9],
        quality: 0.7
    });

    setPickedUrl(image.uri);
  }
  return (
    <ScrollView style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text style={styles.text}>No hay imagen seleccionada</Text>
                ): (
                    <Image source={{uri: pickedUrl}} style={styles.image}/>
                )}
            </View>
            <Button
                title="Tomar foto"
                color={colors.secondary}
                onPress={handleTakeImage}
            />
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