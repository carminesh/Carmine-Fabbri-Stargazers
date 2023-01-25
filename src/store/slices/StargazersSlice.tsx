import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Stargazer } from '../../models/Stargazer';

export interface StargazerState {
    stargazers: Stargazer[] | undefined;
}

const initState: StargazerState = {
    stargazers: [],
};

export const StargazersSlice = createSlice({
    name: 'stargazersManager',
    initialState: initState,
    reducers: {
        setStargazers: (state: Draft<StargazerState>, action: PayloadAction<Stargazer[] | undefined>) => {
            state.stargazers = action.payload;
        },
    },
});

export const { setStargazers } = StargazersSlice.actions;

export const getStargazers = (state: RootState) => state.stargazersReducer.stargazers;
