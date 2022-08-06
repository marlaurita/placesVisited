import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import { styles } from './styles';

const PlaceItem = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> onSelected(item)}  style={styles.containerTouchable}>
            <View>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
};

export default PlaceItem;