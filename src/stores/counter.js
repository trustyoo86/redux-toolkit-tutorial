'use strict';

import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

// create reducer
/* eslint-disable */
const crCounter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1,
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
});
/* eslint-enable */
