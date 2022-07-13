import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const api_Id = '1ixeASo4AU3X3cZnoiCd';
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${api_Id}/books`
  );

  if (response.ok) {
    const book = await response.json();
    return { book };
  }
});
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
