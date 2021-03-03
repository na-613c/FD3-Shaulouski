import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        onSave: PropTypes.func,
        onCancel: PropTypes.func,
        product: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            count: PropTypes.number,
            url: PropTypes.string,
        })
    };

    state = {
        id: this.props.product.id || null,
        name: this.props.product.name || '',
        price: this.props.product.price || 0,
        count: this.props.product.count || 0,
        url: this.props.product.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpSv_fiqETCIwey5l0mIm24tWVxh7z_6eNw&usqp=CAU"
    }

    onChangeInutInfo = (name, price, count) => {
        (name !== this.props.product.name
            || price !== this.props.product.price
            || count !== this.props.product.count)
            ? this.props.setEditMode(true)
            : this.props.setEditMode(false)
    }

    onChangeName = (EO) => {
        this.onChangeInutInfo(EO.target.value, this.state.price, this.state.count)
        this.setState({ name: EO.target.value });
    }

    onChangePrice = (EO) => {
        this.onChangeInutInfo(this.state.name, +EO.target.value, this.state.count)
        this.setState({ price: +EO.target.value });
    }

    onChangeCount = (EO) => {
        this.onChangeInutInfo(this.state.name, this.state.price, +EO.target.value)
        this.setState({ count: +EO.target.value });
    }

    onSave = () => {
        const isSave = window.confirm("Вы действительно хотите сохранить?");
        isSave && this.props.onSave(this.state)
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
                    <span>{this.state.id}</span>
                </div>
                <div>
                    <span>Название: </span>
                    <input type="text" name="name" onChange={this.onChangeName} placeholder="Название" autoComplete="off" />
                    {!this.state.name && <span style={{ color: 'red' }}>заполните Название</span>}
                </div>

                <div>
                    <span>Цена: </span>
                    <input type="number" name="price" onChange={this.onChangePrice} placeholder="Цена" autoComplete="off" />
                    {!this.state.price && <span style={{ color: 'red' }}>заполните Цену</span>}

                </div>
                <div>
                    <span>Количество: </span>
                    <input type="number" name="count" onChange={this.onChangeCount} placeholder="Количество" autoComplete="off" />
                    {!this.state.count && <span style={{ color: 'red' }}>заполните Количество</span>}
                </div>
                <input type="button" onClick={this.onSave} value="Сохранить"
                    disabled={!this.state.name | !this.state.price | !this.state.count} />

                <input type="button" onClick={this.onCancel} value="отмена" />
            </div>
        );
    }
}

export default Form;
