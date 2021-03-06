import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/* eslint camelcase: ["error", {properties: "never"}] */
// eslint-disable-next-line consistent-return
export const getBooksData = createAsyncThunk('books/getBooksData', async () => {
  const id = '1ixeASo4AU3X3cZnoiCd';
  const response = await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`,
  );

  if (response.ok) {
    const book = await response.json();
    return { book };
  }
});

export const addBooks = createAsyncThunk(
  'books / addBooks',
  async (payload) => {
    const id = '1ixeASo4AU3X3cZnoiCd';
    const book = {};
    book.item_id = payload.id;
    book.title = payload.title;
    book.author = payload.author;
    book.category = payload.category;

    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      },
    );

    return book;
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (payload) => {
    const id = '1ixeASo4AU3X3cZnoiCd';
    await fetch(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${id}/books/${payload}`,
      {
        method: 'DELETE',
      },
    );
    return payload;
  },
);

export const bookSlice = createSlice({
  name: 'books',
  initialState: {},
  extraReducers: {
    [getBooksData.pending]: () => {
      console.log('fetching');
    },
    [getBooksData.fulfilled]: (state, action) => {
      console.log('success');
      return action.payload.book;
    },
    [addBooks.fulfilled]: (state, action) => {
      /* eslint no-param-reassign: ["error", { "props": false }] */
      state[action.payload.item_id] = [
        {
          title: action.payload.title,
          author: action.payload.author,
          category: action.payload.category,
        },
      ];
    },
    [deleteBook.fulfilled]: (state, action) => {
      console.log('success');
      delete state[action.payload];
    },
  },
});

export const selectBooks = (state) => state.books;
export const { bookAdded, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
