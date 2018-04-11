import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
require('./style.css');

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById("timeline")
);