import React, {useEffect} from 'react';
import {View , FlatList, Text} from 'react-native';
import {PlaceItem} from "../../components/index"
import { useSelector, useDispatch } from 'react-redux';
import {
    filteredPlace,
    selectPlace,
  } from "../../store/actions/place.action";
import { styles } from './styles';

const PlacesListScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const filterPlaces = useSelector((state) => state.place.filteredPlaces);
    const category = useSelector((state) => state.category.selected);

    useEffect(() => {
        dispatch(filteredPlace(category.id))
    } , []);

    const onSelected = (item) => {
        dispatch(selectPlace(item.id))
        navigation.navigate("Detalle", {
            name: item.name,
        });
    };

    const renderItem = ({item}) => (
        <PlaceItem item={item} onSelected={onSelected}/>
    )
    return (
        <View style={styles.container}>
            {filterPlaces.length > 0 ?
             <FlatList data={filterPlaces}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            /> : 
            <View style={styles.content}> 
                 <Text style={styles.text}> Agrega tu lugar favorito</Text>
            </View>
           }
        </View>
    )
}

export default PlacesListScreen;