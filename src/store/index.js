import { createStore, combineReducers, applyMiddleware } from "redux";
import categoryReducer from "./reducers/category.reducer";
import thunk from "redux-thunk";
import placesReducer from "./reducers/places.reducer";

const RootReducer = combineReducers ({
    category: categoryReducer,
    place: placesReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));