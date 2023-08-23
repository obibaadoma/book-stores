import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../../http-common';
import { addBook } from '../books';

const CREATE_BOOK = 'books/CREATE_BOOK';

const createBook = createAsyncThunk(CREATE_BOOK, async (book, thunkAPI) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseText = await response.text();

  thunkAPI.dispatch(addBook(book));
  return responseText;
});

export default createBook;
