import React from 'react';
import PropTypes from 'prop-types';

class BR2JSX extends React.Component {

    static propTypes = {
        text: PropTypes.string,
    };

    render() {
        const regexp = /<br\s?\/?>/;
        const textArray = this.props.text.split(regexp);

        const text = textArray.map((el, id) => {
            return (
                <React.Fragment key={id}>
                    {id !== 0 && <br />} {el}
                </React.Fragment>
            )
        })

        return (
            <div className='br2jsx'>
                {text}
            </div>
        );
    }
}

export default BR2JSX;