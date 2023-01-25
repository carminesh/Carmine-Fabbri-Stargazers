import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { StargazersSlice } from './slices/StargazersSlice';

const rootReducer = combineReducers({
    stargazersReducer: StargazersSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
