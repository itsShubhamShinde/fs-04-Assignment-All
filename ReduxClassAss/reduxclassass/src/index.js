import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DataProvider from './Components/Context/DataProvider';
import { Provider } from 'react-redux';
import myStore from './Components/React/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={myStore}>
      <DataProvider>
        <App />
      </DataProvider>
    </Provider>
  </BrowserRouter>
);


