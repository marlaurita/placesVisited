import { placeTypes } from "../types/place.types";
import * as FileSystem from "expo-file-system";

const {SELECT_PLACE, FILTERED_PLACES, ADD_PLACE} = placeTypes;

export const selectPlace = (id) => ({
    type: SELECT_PLACE,
    placeId: id
});

export const filteredPlace = (id) => ({
    type: FILTERED_PLACES,
    categoryId: id
});

export const addPlace = (newPlace)=> {
    return async dispatch => {
        const fileName = newPlace.image.split("/").pop();
        const path = FileSystem.documentDirectory + fileName

        try {
            await FileSystem.moveAsync({
                from: newPlace.image,
                to: path
            })
        } catch (err) {
            console.log(err);
            throw err;
        }
        newPlace.image = path;
        dispatch({type: ADD_PLACE, newPlace});
    }
};