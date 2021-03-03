import React from 'react';
import Shop from './components/Shop/Shop.jsx';
import Information from './components/Information/Information.jsx';
import Redaction from './components/Redaction/Redaction.jsx';

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
        isEditMode: false,
    }

    addProductElement = (newProduct) => {
        const a = [...this.state.products, { ...newProduct }]
        return this.setState({ products: a })
    }

    setEditMode = (isEdit) => {
        this.setState({ isEditMode: isEdit })
    }

    setActiveId = (id) => {
        return !this.state.isEditMode && this.setState({ activeId: id })
    }

    deleteProduct = (deleteId) => {
        let newArrayProducts = this.state.products.filter((el) => el.id !== deleteId);

        return this.setState({
            products: newArrayProducts
        })
    };

    render() {

        const [activeProduct] = this.state.products.filter((el) => el.id === this.state.activeId)

        return (<div>
            <Shop
                shopName={this.props.shopName}
                products={this.state.products}
                activeId={this.state.activeId}
                setActiveId={this.setActiveId}
                deleteProduct={this.deleteProduct}
                isEditMode={this.state.isEditMode}
            />
            <Redaction
                addProductElement={this.addProductElement}
                setEditMode={this.setEditMode}
            />

            {this.state.products.some((e) => e.id === this.state.activeId)
                && < Information product={activeProduct} />
            }

        </div>
        )
    }
}

export default App;