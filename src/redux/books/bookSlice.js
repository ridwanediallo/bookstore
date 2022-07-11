import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    bookAdded: (state, action) => {
      state.push(action.payload);
    },
    /* eslint-disable arrow-body-style */
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const selectBooks = (state) => state.books;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
