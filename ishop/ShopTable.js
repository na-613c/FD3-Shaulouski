const ShopTable = React.createClass({

    displayName: 'ShopTable',

    getDefaultProps: function () {
        return {
            shopName: "Проверьте название магазина",
            productsArr: [{ id: 0, name: 'нет данных', price: 'нет данных', url: 'нет данных', counter: 'нет данных' }]
        }
    },

    render: function () {

        const products = this.props.productsArr.map((e) => {
            return React.DOM.tr({ key: e.id, className: 'Product' },
                React.DOM.td({ className: 'productsImg' },
                    React.DOM.img({ src: e.url, alt: "" },)),
                React.DOM.td({}, e.name),
                React.DOM.td({}, `${e.price} руб`),
                React.DOM.td({}, `${e.count} шт`),
            );
        })

        const theadArr = ["URL фотографии", "Название", "Цена", "Количество"].map((e) => {
            return React.DOM.td({ key: e, className: 'ProductsThead' }, e);
        })

        return React.DOM.table({ className: 'ShopTable' },
            React.DOM.caption({ className: 'ShopCaption' }, this.props.shopName),
            React.DOM.thead({ className: 'ShopName' },
                React.DOM.tr({}, theadArr)),
            React.DOM.tbody({}, products),
        );
    },

});