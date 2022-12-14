import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx';

import './index.less'
import { Provider } from 'react-redux';
import { store } from './reducers';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') 
)