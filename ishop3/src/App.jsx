import React from 'react';
import Shop from './components/Shop/Shop.jsx';
import Information from './components/Information/Information.jsx';
import Redaction from './components/Redaction/Redaction.jsx';
import PropTypes from 'prop-types';

const defaultProduct = {
    id: -1,
    name: '',
    price: 0,
    count: 0,
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpSv_fiqETCIwey5l0mIm24tWVxh7z_6eNw&usqp=CAU"
}

const placeholderArr = ['Редактирование', 'Создание'];

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
        isShowReduction: false,
        editProduct: defaultProduct,
        placeholder: placeholderArr[0],
    }

    setPlaceholder = (i) => {
        this.setState({ placeholder: placeholderArr[i] })
    }

    setShowReduction = (isShowReduction) => {
        this.setState({ isShowReduction })
    }

    setEditMode = (isEdit) => {
        this.setState({ isEditMode: isEdit })
    }

    setActiveId = (id) => {
        return !this.state.isEditMode && this.setState({ activeId: id })
    }

    deleteProduct = (deleteId) => {
        const products = this.state.products;
        this.setState({
            products: products.filter((el) => el.id !== deleteId)
        })
    };

    newId = () => {
        const products = this.state.products;
        const max = products.reduce((acc, curr) => acc.id > curr.id ? acc.id : curr.id);
        return max + 1;
    }

    startEdit = (product = defaultProduct) => {
        const isNewProuct = (product.id === -1);

        this.setShowReduction(true);
        this.setPlaceholder(isNewProuct ? 1 : 0);
        this.setActiveId(product.id);
        this.setState({
            editProduct: {
                ...product,
                id: isNewProuct ? this.newId() : product.id
            }
        })
    }

    editProduct = (product) => {
        this.setState({ editProduct: product })
    }

    saveProduct = () => {
        const products = this.state.products;
        const editProduct = this.state.editProduct;
        let newArrayProducts = products.map((el) => el.id !== editProduct.id ? el : editProduct);
        const isOldProduct = newArrayProducts.some((el) => el.id === editProduct.id);
        !isOldProduct && newArrayProducts.push(editProduct)

        this.setShowReduction(false);
        this.setState({
            products: newArrayProducts,
            editProduct: defaultProduct
        })
    }

    cancelEdit = () => {
        this.setShowReduction(false)
        this.setState({ editProduct: defaultProduct })
    }

    render() {

        const [activeProduct] = this.state.products.filter((el) => el.id === this.state.activeId)

        return (
            <div className='container'>
                <Shop
                    shopName={this.props.shopName}
                    products={this.state.products}
                    activeId={this.state.activeId}
                    setActiveId={this.setActiveId}
                    deleteProduct={this.deleteProduct}
                    isEditMode={this.state.isEditMode}
                    startEdit={this.startEdit}
                />
                <Redaction
                    setEditMode={this.setEditMode}
                    isShowReduction={this.state.isShowReduction}
                    saveProduct={this.saveProduct}
                    cancelEdit={this.cancelEdit}
                    editProduct={this.state.editProduct}
                    editProductCB={this.editProduct}
                    startEdit={this.startEdit}
                    placeholder={this.state.placeholder}
                />

                {this.state.products.some((e) => e.id === this.state.activeId)
                    && < Information product={activeProduct} />
                }

            </div>
        )
    }
}

export default App;