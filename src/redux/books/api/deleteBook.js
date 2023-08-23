import { createAsyncThunk } from '@reduxjs/toolkit';
import url from '../../../http-common';
import { removeBook } from '../books';

const DELETE_BOOK = 'books/DELETE_BOOK';

const deleteBook = createAsyncThunk(DELETE_BOOK, async (id, thunkAPI) => {
  const response = await fetch(`${url}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseJSON = await response.text();
  thunkAPI.dispatch(removeBook(id));
  return responseJSON;
});

export default deleteBook;
