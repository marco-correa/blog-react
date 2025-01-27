import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FiltersState {
  categories: { [key: string]: boolean };
  authors: { [key: string]: boolean };
}

const initialState: FiltersState = {
  categories: {},
  authors: {},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilters: (state, action: PayloadAction<FiltersState>) =>
      action.payload,
  },
});

export const filtersActions = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
