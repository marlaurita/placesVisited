import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { styles } from './styles';

const PlaceItem = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> onSelected(item)}  style={styles.containerTouchable}>
                <ImageBackground source={{uri : item.image}} 
                style={styles.image} 
                imageStyle={{ borderRadius: 50}}
                resizeMode='cover'/>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default PlaceItem;