'use strict';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { counterSlice, getApiTest } from '../stores/counter';

function Main() {
  const dispatch = useDispatch();
  const counter = useSelector(store => store.counter.counter);
  const data = useSelector(store => store.counter.data);

  function clickHandler(type) {
    if (type === 'plus') {
      dispatch(counterSlice.actions.increment());
    } else {
      dispatch(counterSlice.actions.decrement());
    }
  }

  useEffect(() => {
    dispatch(getApiTest());
    console.log('data ===>', data);
  }, []);

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
      {
        data.map((item, idx) => {
          return (
            <p key={idx}>{item.title}</p>
          );
        })
      }
    </div>
  );
}

export default Main;
