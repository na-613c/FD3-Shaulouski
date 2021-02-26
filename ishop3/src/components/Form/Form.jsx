import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component {

    static propTypes = {
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
        name: this.props.product.name || null,
        price: this.props.product.price || null,
        count: this.props.product.count || null,
        url: this.props.product.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnpSv_fiqETCIwey5l0mIm24tWVxh7z_6eNw&usqp=CAU"
    }


    switch = () => {
        this.setState({ isShow: !this.state.isShow })
        !this.state.isShow &&
            this.setState({ id: Date.parse(new Date) });
    }

    onChangeName = (EO) => {
        this.setState({ name: EO.target.value });
    }

    onChangePrice = (EO) => {
        this.setState({ price: +EO.target.value });
    }

    onChangeCount = (EO) => {
        this.setState({ count: +EO.target.value });
    }

    saveBtn = () => {
        if (!this.state.name | !this.state.price | !this.state.count) {
            console.log('ERROR')
        } else {
            console.log(this.state)
            this.props.onSave(this.state)
        }
    }

    cancelBtn = () => {
        this.props.onCancel()
    }

    render() {
        return (
            <div>
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
                <input type="button" onClick={this.saveBtn} value="Сохранить" />
                <input type="button" onClick={this.cancelBtn} value="отмена" />
            </div>
        );
    }
}

export default Form;
