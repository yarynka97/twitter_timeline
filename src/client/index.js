import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
require('../style.css');

const history = createBrowserHistory();

ReactDOM.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>,
    document.getElementById("timeline")
);