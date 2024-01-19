import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { Provider } from 'react-redux';
import { store } from './myRedux/store';
import { App } from 'components';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);
