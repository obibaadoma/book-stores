// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'Categories',
  initialState: [],

  reducers: {
    checkStatus: () => 'Under Construction!',
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
