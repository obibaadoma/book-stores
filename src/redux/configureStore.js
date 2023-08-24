import { configureStore } from '@reduxjs/toolkit';
import checkReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    check: checkReducer,
    books: booksReducer,
  },
});

export default store;
