import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom'
import routes from './routes'

import { store } from './store/index'

import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>{routes}</HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);