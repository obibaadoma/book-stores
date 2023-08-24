import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/GET_BOOK';
const initialState = [];

export const getBook = createAsyncThunk(GET_BOOK, async () => {
  const result = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYpOE5ekIC25miOud97q/books', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  });
  const json = result.json();
  return json;
});

export const addAction = createAsyncThunk(ADD_BOOK, (payload) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYpOE5ekIC25miOud97q/books', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  return payload;
});

export const removeAction = createAsyncThunk(REMOVE_BOOK, (payload) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TYpOE5ekIC25miOud97q/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload,
    }),
  });
  return payload;
});

const booksReducer = (state = initialState, action) => {
  const list = [];
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    case `${GET_BOOK}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    default:
      return state;
  }
};

export default booksReducer;
