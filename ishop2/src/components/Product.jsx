import React from 'react';


const Product = ({ product, deleteProduct, isActive, setActive }) => {

  const deleteElement = (e) => {
    e.stopPropagation();
    const isDelete = window.confirm("Вы действительно хотите удалить?");
    isDelete && deleteProduct(product.name)
  }

  const setActiveMod = () => {
    setActive(isActive ? null : product.name)
  }

  return (
    <tr className={isActive ? 'Product Active' : 'Product '} onClick={setActiveMod}>
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
