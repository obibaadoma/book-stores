import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/VWV3LtrBCYDGjgHmeVp9';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`${baseURL}/books`);
  const responseData = response.data;

  const booksArray = Object.keys(responseData).map((key) => ({
    ...responseData[key][0],
    item_id: key,
  }));

  return booksArray;
});

export const addBook = createAsyncThunk('books/addNewBook', async (book) => {
  await axios.post(`${baseURL}/books`, book);
  return book;
});

export const removeBook = createAsyncThunk('books/deleteBook', async (itemId) => {
  await axios.delete(`${baseURL}/books/${itemId}`);
  return itemId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: { data: [] },
  reducers: {
    updateProgress: (state, action) => {
      const bookToUpdate = state.data.find((book) => book.item_id === action.payload.item_id);
      if (bookToUpdate) {
        bookToUpdate.progress = action.payload.progress;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
        }
      })
      .addCase(addBook.fulfilled, (state, action) => {
        if (Array.isArray(state.data)) {
          state.data.push(action.payload);
        } else {
          state.data = [action.payload];
        }
      })

      .addCase(removeBook.fulfilled, (state, action) => {
        if (Array.isArray(state.data)) {
          state.data = state.data.filter((book) => book.item_id !== action.payload);
        }
      });
  },
});

export const { updateProgress } = booksSlice.actions;

export default booksSlice.reducer;
