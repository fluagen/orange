import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/main.scss';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
