'use strict';

import React from 'react';
import { Provider } from 'react-redux';

// component
import Main from './pages/Main';
import counter from './counter';

function App() {
  return (
    <Provider store={counter}>
      <Main />
    </Provider>
  );
}

export default App;
