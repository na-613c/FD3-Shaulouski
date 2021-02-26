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
    activeName: null,
  }

  setActiveName = (n) => {
    return this.setState({ activeName: n })
  }


  deleteProduct = (name) => {
    let newArrayProducts = this.state.products.filter((el) => el.name !== name);

    return this.setState({
      products: newArrayProducts
    })
  };

  theadArr = ["URL фотографии", "Название", "Цена", "Количество", "Управление"].map((e) => {
    return <td key={e} className='ProductsThead'>{e}</td>
  });

  


  render() {

    const productsElement = this.state.products.map((product) => {
      return (
        <Product product={product}
          deleteProduct={this.deleteProduct}
          isActive={(product.name === this.state.activeName)}
          setActive={this.setActiveName}
          key={product.name} />
      )
    });

    return (
      <table className='ShopTable'>
        <caption className='ShopCaption'>{this.props.shopName}</caption>
        <thead className='ShopName'>
          <tr>
            {this.theadArr}
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
