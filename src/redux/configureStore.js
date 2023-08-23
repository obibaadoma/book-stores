import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import checkStatusReducer from './categories/categories';

/* const rootReducer = combineReducers({
  reducer:
  { books: booksReducer, category: checkStatusReducer },
}); */

const store = configureStore({
  reducer:
  { books: booksReducer, categories: checkStatusReducer },
});

export default store;
