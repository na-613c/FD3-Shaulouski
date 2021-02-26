import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form.jsx';


class AddProduct extends React.Component {

    static propTypes = {
        addProductElement: PropTypes.func,
    };

    state = {
        isShow: false,
        product: {
            id: null,
            name: null,
            price: null,
            count: null,
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpSv_fiqETCIwey5l0mIm24tWVxh7z_6eNw&usqp=CAU"
        }

    }

    switch = () => {
        this.setState({ isShow: !this.state.isShow })
        !this.state.isShow &&
            this.setState({ product: { ...this.state.product, id: Date.parse(new Date) } });
    }

    addBtn = (product) => {
        this.props.addProductElement(product)
        this.switch();
    }

    cancalBtn = () => {
        this.setState({
            product: {
                id: null,
                name: null,
                price: null,
                count: null,
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpSv_fiqETCIwey5l0mIm24tWVxh7z_6eNw&usqp=CAU"
            }
        });
        this.switch();
    }

    render() {
        return (
            <div>
                {!this.state.isShow
                    ? <input type="button" onClick={this.switch} value="Создать" />
                    : (<Form product={this.state.product} onSave={this.addBtn} onCancel={this.cancalBtn} />)
                }
            </div>
        );
    }
}

export default AddProduct;
