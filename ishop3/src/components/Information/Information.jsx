import React from 'react';
import PropTypes from 'prop-types';


class Information extends React.Component {

    static propTypes = {
        product: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            count: PropTypes.number,
            url: PropTypes.string,
        })
    };

    render() {
        return (
            <div>
                <img src={this.props.product.url} style={{ width: 200 }} alt="" />
                <div>
                    {`Название: ${this.props.product.name}`}
                </div>
                <div>
                    {`Цена: ${this.props.product.price} руб`}
                </div>
                <div>
                    {`Количество: ${this.props.product.count} шт`}
                </div>
            </div>
        )
    }
}

export default Information;
