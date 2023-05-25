import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {
    checkStatus(state, action) {
      if (action.payload === 'Under construction') {
        return {
          ...state,
          categories: [...state.categories, 'Under construction'],
        };
      }
      return state;
    },
  },

});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice;
