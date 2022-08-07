import { placeTypes } from "../types/place.types";

const {SELECT_PLACE, FILTERED_PLACES, ADD_PLACE, GET_PLACES} = placeTypes;
const initialState = {
    places: [],
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
        case ADD_PLACE:
            let updatePlaces = [];
            updatePlaces = [...state.places, action.newPlace] 
            return {
                ...state,
                places: updatePlaces
            }
        case GET_PLACES: 
            return {
                ...state,
                places: action.payload,
            }
        default: return state
    }
}

export default placesReducer;