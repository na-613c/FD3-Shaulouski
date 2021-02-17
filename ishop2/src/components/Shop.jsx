import './Shop.css';
import React, { useState } from 'react';
import Product from './Product';


const Shop = ({ shopName, productsArr }) => {

  const [products, setProducts] = useState(productsArr);
  const [activeName, setActiveName] = useState(null);

  const deleteProduct = (name) => {
    setProducts((prev) => prev.filter((el) => el.name !== name))
  };

  const theadArr = ["URL фотографии", "Название", "Цена", "Количество", "Управление"].map((e) => {
    return <td key={e} className='ProductsThead'>{e}</td>
  });

  const productsElement = products.map((product) => {
    return (
      <Product product={product}
        deleteProduct={deleteProduct}
        isActive={(product.name === activeName)}
        setActive={setActiveName}
        key={product.name} />
    )
  });

  return (
    <table className='ShopTable'>
      <caption className='ShopCaption'>{shopName}</caption>
      <thead className='ShopName'>
        <tr>
          {theadArr}
        </tr>
      </thead>
      <tbody>
        {productsElement}
      </tbody>
    </table>
  );
}

export default Shop;
