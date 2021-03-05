import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {

  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.number,
      url: PropTypes.string,
      count: PropTypes.number
    }),
    deleteProduct: PropTypes.func,
    isActive: PropTypes.bool,
    setActive: PropTypes.func,
    startEdit: PropTypes.func,
    isEditMode: PropTypes.bool,
  };

  deleteElement = (e) => {
    e.stopPropagation();
    const isDelete = window.confirm("Вы действительно хотите удалить?");
    isDelete && this.props.deleteProduct(this.props.product.id)
  }

  editProduct = (e) => {
    e.stopPropagation();
    this.props.startEdit(this.props.product);
  }

  setActiveMod = () => {
    this.props.setActive(this.props.isActive ? null : this.props.product.id)
  }

  render() {
    return (
      <tr className={this.props.isActive ? 'Product Active' : 'Product '} onClick={this.setActiveMod}>
        <td className='productsImg'>
          <img src={this.props.product.url} alt="" />
        </td>
        <td>
          {this.props.product.name}
        </td>
        <td>
          {`${this.props.product.price} руб`}
        </td>
        <td>
          {`${this.props.product.count} шт`}
        </td>
        <td>
          <button onClick={this.deleteElement} disabled={this.props.isEditMode}>
            Удалить
          </button>
          <button onClick={this.editProduct} disabled={this.props.isEditMode}>
            Редактировать
          </button>
        </td>
      </tr>
    );
  }
}

export default Product;
