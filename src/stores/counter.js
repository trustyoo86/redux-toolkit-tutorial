'use strict';

import { createAction, createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

// create reducer
/* eslint-disable */
const crCounter = createReducer(0, {
  [increment]: state => state.counter + 1,
  [decrement]: state => state.counter - 1,
});

export const getApiTest = createAsyncThunk(
  'api/test',
  async () => {
    const response = await axios.get('http://localhost:4000/api/test');
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { 
    counter: 0,
    data: [],
  },
  reducers: {
    increment: state => state.counter + 1,
    decrement: state => state.counter - 1,
  },
  extraReducers: {
    [getApiTest.fulfilled]: (state, action) => {
      console.log('payload ===>', action.payload);
      state.data = action.payload;
      // state.data.push(action.payload);
    },
  },
});
/* eslint-enable */
