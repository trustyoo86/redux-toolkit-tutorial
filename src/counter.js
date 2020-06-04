'use strict';

import { createAction, createReducer, createSlice, configureStore } from '@reduxjs/toolkit';

const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

// create reducer
/* eslint-disable */
const crCounter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1,
});

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    [increment]: state => state + 1,
    [decrement]: state => state - 1,
  },
});
/* eslint-enable */

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
