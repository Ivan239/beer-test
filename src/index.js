import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //  theme
import 'primereact/resources/primereact.min.css'; //  core css
import 'primeicons/primeicons.css'; //  icons
import store from './redux/store/store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root'),
);
