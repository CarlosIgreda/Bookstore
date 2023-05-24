import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.books = [action.payload, ...state.books];
    },
    removeBook: (state, action) => {
      const indexOfId = state.books.indexOf(action.payload);
      state.books.splice(indexOfId, 1);
    },
  },
});

export default booksSlice;
