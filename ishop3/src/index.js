import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './components/Shop/Shop.jsx';

const productsArr = require('./data/products.json');
const shopName = 'Евроопт';

ReactDOM.render(
  <React.StrictMode>
    <Shop shopName={shopName} productsArr={productsArr} />
  </React.StrictMode>,
  document.getElementById('root')
);

