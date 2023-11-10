import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    filterContact(state, action) {
      state.value = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;