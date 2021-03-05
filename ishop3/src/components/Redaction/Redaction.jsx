import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form/Form.jsx';


class Redaction extends React.Component {

    static propTypes = {
        setEditMode: PropTypes.func,
        isShowReduction: PropTypes.bool,
        placeholder: PropTypes.string,
        saveProduct: PropTypes.func,
        cancelEdit: PropTypes.func,
        editProductCB: PropTypes.func,
        startEdit: PropTypes.func,
        editProduct: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            price: PropTypes.number,
            url: PropTypes.string,
            count: PropTypes.number
        })
    };

    createBtn = () => {
        this.props.startEdit()
    }

    render() {
        return (
            <div className="createElement">
                {!this.props.isShowReduction
                    ? <input type="button" onClick={this.createBtn} value="Создать" />
                    : <Form
                        placeholder={this.props.placeholder}
                        onSave={this.props.saveProduct}
                        onCancel={this.props.cancelEdit}
                        setEditMode={this.props.setEditMode}
                        editProductCB={this.props.editProductCB}
                        product={this.props.editProduct}
                    />
                }
            </div>
        );
    }
}

export default Redaction;
