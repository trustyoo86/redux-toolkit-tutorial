'use strict';

import React from 'react';
import { Provider } from 'react-redux';

// component
import Main from './pages/Main';
import store from './stores';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
