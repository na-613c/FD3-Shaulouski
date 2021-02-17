import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop from './components/Shop';
import reportWebVitals from './reportWebVitals';


const shopName = 'Евроопт';
const productsArr = [
  { name: 'Ананас', price: '4.55', url: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/1602/00001602/norm/thumbs/00001602.n_1_190x190@2x.png.jpg', count: 111 },
  { name: 'Банан', price: '3.79', url: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/3033/00093033/norm/thumbs/00093033.n_1_190x190@2x.png.jpg', count: 333 },
  { name: 'Помело', price: '3.19', url: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/7050/00077050/norm/thumbs/00077050.n_1_190x190@2x.png.jpg?09022021', count: 444 },
  { name: 'Капуста', price: '1.71', url: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/0923/00010923/norm/thumbs/00010923.n_1_190x190@2x.png.jpg?17022021', count: 222 },
  { name: 'Томат', price: '3.89', url: 'https://img.e-dostavka.by/UserFiles/images/catalog/Goods/5479/00095479/norm/thumbs/00095479.n_1_190x190@2x.png.jpg?17022021', count: 555 },
];

ReactDOM.render(
  <React.StrictMode>
    <Shop shopName={shopName} productsArr={productsArr} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
