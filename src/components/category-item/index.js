import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from "react-native";
import { styles } from './styles';
import Images from './image';

const CategoryItem = ({item, onSelected}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> onSelected(item)} style={styles.containerTouchable}>
            <ImageBackground 
                source={item.title === 'Ciudad' ? Images.city : 
                item.title === 'Pueblo' ? Images.town :
                item.title === 'Museo'? Images.museum :
                item.title === 'Restaurantes' ? Images.rest :
                item.title === 'Sitio Random' ? Images.random :Images.must} 
                imageStyle={{ borderRadius: 100}}
                resizeMode='cover'
                style={{ width: '100%', height: '100%'}}
            />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryItem;