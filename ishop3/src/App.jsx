import React from 'react';
import Shop from './components/Shop/Shop.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';

import PropTypes from 'prop-types';

class App extends React.Component {
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

    addProductElement = (newProduct) => {
        const a = [...this.state.products, { ...newProduct}]
        return this.setState({ products: a })
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

        return (<div>
            <Shop shopName={this.props.shopName}
                products={this.state.products}
                activeId={this.state.activeId}
                setActiveId={this.setActiveId}
                deleteProduct={this.deleteProduct}
            />
            <AddProduct addProductElement={this.addProductElement}/>
        </div>
        )
    }
}

export default App;