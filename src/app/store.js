import { configureStore, combineReducers } from "@reduxjs/toolkit";
import artistsSlice from "./reducers/artistsSlice";
import songsSlice from "./reducers/songsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
};

const reducers = combineReducers({
	artists: artistsSlice,
	songs: songsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
});

export const persistor = persistStore(store);
