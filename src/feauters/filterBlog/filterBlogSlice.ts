import { createSlice } from '@reduxjs/toolkit';

export interface FilterState {
  filter: string;
  popular: 'all' | 'popular'
}

const initialState: FilterState = {
  filter: '',
  popular: 'all'
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterBlogs: (state, action) => {
      state.filter = action.payload;
    },
    popularBlogs: (state, action) => {
      state.popular = action.payload;
    }
  }
});

export const { filterBlogs, popularBlogs } = filterSlice.actions;