import React, {useEffect} from 'react';
import {View , FlatList} from 'react-native';
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
             <FlatList data={filterPlaces}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
        </View>
    )
}

export default PlacesListScreen;