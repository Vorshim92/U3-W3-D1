import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favsReducer from "../reducers/favsReducer";
import resultReducer from "../reducers/searchResReducer";

const unifiedReducer = combineReducers({
  favourites: favsReducer,
  results: resultReducer,
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
