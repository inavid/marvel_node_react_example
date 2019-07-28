import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import store from './store'

import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Home from './components/Home/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();
