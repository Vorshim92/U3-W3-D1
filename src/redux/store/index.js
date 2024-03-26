import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favsReducer from "../reducers/favsReducer";

// poichè la proprietà "reducer" accetta UN SOLO reducer per creare lo store,
// ho bisogno di ri-costruire la torta!

const unifiedReducer = combineReducers({
  favourites: favsReducer, // ricostruisce la fetta user
});

const store = configureStore({
  reducer: unifiedReducer,
});

export default store;
