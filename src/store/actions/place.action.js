import { placeTypes } from "../types/place.types";

const {SELECT_PLACE, FILTERED_PLACES} = placeTypes;

export const selectPlace = (id) => ({
    type: SELECT_PLACE,
    placeId: id
});

export const filteredPlace = (id) => ({
    type: FILTERED_PLACES,
    categoryId: id
});