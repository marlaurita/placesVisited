import {places} from "../../data/places";
import { placeTypes } from "../types/place.types";

const {SELECT_PLACE, FILTERED_PLACES} = placeTypes;
const initialState = {
    places,
    filteredPlaces: [],
    selected: null
}

const placesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SELECT_PLACE:
            return {
                ...state,
                selected: state.places.find(
                    (place) => place.id === action.placeId
                )
            }
        case FILTERED_PLACES: 
            return {
            ...state,
            filteredPlaces: state.places.filter(
                    (place) => place.categoryId === action.categoryId
                )
            };
        default: return state
    }
}

export default placesReducer;