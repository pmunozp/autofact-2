import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import {Provider} from 'react-redux';
import store from './redux/store'

import $ from 'jquery';
import Popper from 'popper.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';

ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);