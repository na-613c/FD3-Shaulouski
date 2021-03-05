import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        onSave: PropTypes.func,
        onCancel: PropTypes.func,
        editProductCB: PropTypes.func,
        setEditMode: PropTypes.func,
        product: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            count: PropTypes.number,
            url: PropTypes.string,
        })
    };

    onChangeInutInfo = (name, price, count) => {
        const isEditMode = (name !== this.props.product.name) || (price !== this.props.product.price) || (count !== this.props.product.count);
        isEditMode
            ? this.props.setEditMode(true)
            : this.props.setEditMode(false)
    }

    onChangeName = (EO) => {
        this.onChangeInutInfo(EO.target.value, this.props.product.price, this.props.product.count)
        this.props.editProductCB({ ...this.props.product, name: EO.target.value });
    }

    onChangePrice = (EO) => {
        this.onChangeInutInfo(this.props.product.name, +EO.target.value, this.props.product.count)
        this.props.editProductCB({ ...this.props.product, price: +EO.target.value });
    }

    onChangeCount = (EO) => {
        this.onChangeInutInfo(this.props.product.name, this.props.product.price, +EO.target.value)
        this.props.editProductCB({ ...this.props.product, count: +EO.target.value });
    }

    onSave = () => {
        const isSave = window.confirm("Вы действительно хотите сохранить?");
        isSave && this.props.onSave(this.props.product)
        this.props.setEditMode(false)
    }

    onCancel = () => {
        this.props.onCancel()
        this.props.setEditMode(false)
    }

    render() {
        return (
            <div>
                <h3>{this.props.placeholder}</h3>
                <div>
                    <span>ID: </span>
                    <span>{this.props.product.id}</span>
                </div>
                <div>
                    <span>Название: </span>
                    <input value={this.props.product.name}
                        type="text"
                        name="name"
                        onChange={this.onChangeName}
                        placeholder="Название"
                        autoComplete="off"
                    />
                    {!this.props.product.name && <span style={{ color: 'red' }}>заполните Название</span>}
                </div>

                <div>
                    <span>Цена: </span>
                    <input
                        value={this.props.product.price}
                        type="number"
                        name="price"
                        onChange={this.onChangePrice}
                        placeholder="Цена"
                        autoComplete="off"
                    />
                    {!this.props.product.price && <span style={{ color: 'red' }}>заполните Цену</span>}
                </div>

                <div>
                    <span>Количество: </span>
                    <input
                        value={this.props.product.count}
                        type="number"
                        name="count"
                        onChange={this.onChangeCount}
                        placeholder="Количество"
                        autoComplete="off"
                    />
                    {!this.props.product.count && <span style={{ color: 'red' }}>заполните Количество</span>}
                </div>
                
                <input
                    type="button"
                    onClick={this.onSave}
                    value="Сохранить"
                    disabled={!this.props.product.name | !this.props.product.price | !this.props.product.count}
                />
                <input type="button" onClick={this.onCancel} value="отмена" />
            </div>
        );
    }
}

export default Form;
