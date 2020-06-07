'use strict';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterSlice } from '../stores/counter';

function Main(props) {

  const dispatch = useDispatch();
  const counter = useSelector((store) => {
    return store.counter;
  });

  function clickHandler(type) {
    if (type === 'plus') {
      dispatch(counterSlice.actions.increment());
    } else {
      dispatch(counterSlice.actions.decrement());
    }
  }

  return (
    <div>
      <div>
        {counter}
      </div>
      <div>
        <button type='button'
          onClick={() => clickHandler('plus')}>+</button>
        <button type='button'
          onClick={() => clickHandler('minus')}>-</button>
      </div>
      Hello!
    </div>
  );
}

export default Main;
