import React, { useState } from 'react';


const Product = ({ product, deleteProduct }) => {

  const [active, setActive] = useState(false);

  const deleteElement = (e) => {
    e.stopPropagation();
    const isDelete = window.confirm("Вы действительно хотите удалить?");
    isDelete && deleteProduct(product.name)
  }

  return (
    <tr className={active ? 'Product Active' : 'Product '} onClick={() => setActive(!active)}>
      <td className='productsImg'>
        <img src={product.url} alt="" />
      </td>
      <td>
        {product.name}
      </td>
      <td>
        {`${product.price} руб`}
      </td>
      <td>
        {`${product.count} шт`}
      </td>
      <td>
        <button onClick={deleteElement}>
          Удалить
        </button>
      </td>
    </tr>
  );
}


export default Product;
