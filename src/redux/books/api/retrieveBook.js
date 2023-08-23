import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../../http-common';

const RETRIVE_BOOKS = 'books/RETRIEVE_BOOK';

const retrieveBooks = createAsyncThunk(RETRIVE_BOOKS, async (_, thunkAPI) => {
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseJSON = await response.json();

  thunkAPI.dispatch(retrieveBooks(responseJSON));
  return responseJSON;
});

export default retrieveBooks;
