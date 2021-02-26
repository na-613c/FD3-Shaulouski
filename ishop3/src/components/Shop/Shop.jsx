import './Shop.css';
import React from 'react';
import Product from './Elements/Product.jsx';
import PropTypes from 'prop-types';


class Shop extends React.Component {

  static propTypes = {
    shopName: PropTypes.string,
    productsArr: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
      count: PropTypes.number
    }))
  };

  state = {
    products: this.props.productsArr,
    activeId: null,
  }

  setActiveId = (id) => {
    return this.setState({ activeId: id })
  }

  deleteProduct = (deleteId) => {
    let newArrayProducts = this.state.products.filter((el) => el.id !== deleteId);

    return this.setState({
      products: newArrayProducts
    })
  };

  render() {

    const productsElement = this.state.products.map((product) => {
      return (
        <Product product={product}
          deleteProduct={this.deleteProduct}
          isActive={(product.id === this.state.activeId)}
          setActive={this.setActiveId}
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
