import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: [], showText: false },
  reducers: {
    /* eslint-disable no-param-reassign */
    toggleText(state) {
      state.showText = !state.showText;
    },
  },
});

export const selectTect = (state) => state.categories;
export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice.reducer;
