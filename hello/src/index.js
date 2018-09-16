import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appa from './Appa';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Appa />, document.getElementById('hello'));
registerServiceWorker();
