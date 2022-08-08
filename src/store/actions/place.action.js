import { placeTypes } from "../types/place.types";
import * as FileSystem from "expo-file-system";
import { URL_API } from "../../database/firebase";

const {SELECT_PLACE, FILTERED_PLACES, ADD_PLACE, GET_PLACES} = placeTypes;

export const selectPlace = (id) => ({
    type: SELECT_PLACE,
    placeId: id
});

export const filteredPlace = (id) => ({
  type: FILTERED_PLACES,
  categoryId: id
});

export const getPlaces = () => {
  return async (dispatch) => {
    try {
        const response = await fetch(`${URL_API}places.json`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
        const data = await response.json();
        const places = Object.keys(data).map((key) => {
            return {
                ...data[key].newPlace,
                id: key,
            }
        });
        console.log("places", places);
        dispatch({
            type: GET_PLACES,
            payload: places
        })
    } catch (error) {
        console.log(error.message);
    }
  }
};

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

        try {
            const response = await fetch(`${URL_API}/places.json`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                date: Date.now(),
                newPlace,
              }),
            });
      
            const result = await response.json();
            console.log(result);
           
            dispatch({type: ADD_PLACE, newPlace});
          } catch (error) {
            console.log(error);
          }
    }
};