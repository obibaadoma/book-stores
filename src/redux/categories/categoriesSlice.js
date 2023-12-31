import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: '',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getStatus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
