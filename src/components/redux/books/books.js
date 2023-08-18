import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EDWoMDjjz0qKMAfUSscI/books';

const initialState = [];

export const fetchBooks = createAsyncThunk(
  'fetchBooks',
  async () => {
    const response = await axios.get(URL);
    const data = Object.keys(response.data).map((id) => ({
      item_id: id,
      ...response.data[id][0],
    }));
    return data;
  },
);

export const addBook = createAsyncThunk(
  'addBook',
  async (payload) => {
    await axios.post(URL, payload);
    return payload;
  },
);

export const removeBook = createAsyncThunk(
  'removeBook',
  async (id) => {
    await axios.delete(`${URL}/${id}`);
    return id;
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addBook.fulfilled, (state, action) => [...state, action.payload]);
    builder.addCase(removeBook.fulfilled, (state, action) => {
      if (action.payload) {
        return state.filter((book) => book.item_id !== action.payload);
      }
      return state;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      if (action.payload === '') {
        return state;
      }
      return [...action.payload];
    });
  },
});

export default bookSlice.reducer;
