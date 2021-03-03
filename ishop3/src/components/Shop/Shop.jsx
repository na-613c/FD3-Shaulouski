import './Shop.css';
import React from 'react';
import Product from './Elements/Product.jsx';
import PropTypes from 'prop-types';


class Shop extends React.Component {

  static propTypes = {
    shopName: PropTypes.string,
    activeId: PropTypes.number,
    deleteProduct: PropTypes.func,
    setActiveId: PropTypes.func,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
      count: PropTypes.number
    })),
  };



  render() {

    const productsElement = this.props.products.map((product) => {
      return (
        <Product product={product}
          deleteProduct={this.props.deleteProduct}
          isActive={(product.id === this.props.activeId)}
          setActive={this.props.setActiveId}
          key={product.id} />
      )
    });

    const theadArr = ["URL фотографии", "Название", "Цена", "Количество", "Управление"].map((e) => {
      return <td key={e} className='ProductsThead'>{e}</td>
    });

    return (
      <table className='ShopTable'>
        <caption className='ShopCaption'>{this.props.shopName}</caption>
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
}

export default Shop;
