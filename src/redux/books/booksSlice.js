import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/b1VnLXplMBrgrbcSaOSR/books';

const initialState = {
  booksList: [],
  status: 'notStarted',
  error: null,
};

export const fetchBooks = createAsyncThunk('fetchBooks', async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('addBook', async (newBookAdded) => {
  try {
    const response = await axios.post(URL, newBookAdded);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const deleteBook = createAsyncThunk('deleteBook', async (bookId) => {
  try {
    const response = await axios.delete(`${URL}/${bookId}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'load';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'success';
        state.booksList = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'fail';
        state.error = action.error.message;
      });
  },
});

export const booksError = (state) => state.books.error;
export const allBooks = (state) => state.books.booksList;
export const booksStatus = (state) => state.books.status;

export default booksSlice.reducer;
