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

const url = 'http://localhost:4000/api/test';

export const getApiTest = createAsyncThunk(
  'api/get/test',
  async () => {
    const response = await axios.get(url);
    return response.data;
  }
);

export const postApiTest = createAsyncThunk(
  'api/post/test',
  async (data) => {
    const res = await axios.post(url, data);
    return res.data;
  }
)

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
    [postApiTest.fulfilled]: (state, action) => {
      console.log('payload ===>', action.payload);
      console.log('state', state);
    },
  },
});
/* eslint-enable */
