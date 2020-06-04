'use strict';

import React from 'react';
import { useSelector } from 'react-redux';

function Main() {
  const counter = useSelector(store => store);

  return (
    <div>
      {counter}
      Hello!
    </div>
  );
}

export default Main;
