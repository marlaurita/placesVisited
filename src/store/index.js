import { createStore, combineReducers, applyMiddleware } from "redux";
import categoryReducer from "./reducers/category.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers ({
    category: categoryReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk));