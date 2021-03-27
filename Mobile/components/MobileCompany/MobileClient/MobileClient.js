import React from 'react';
import PropTypes from 'prop-types';
import { mobileEvents } from '../../../events';

import './MobileClient.css';

class MobileClient extends React.PureComponent {

  static propTypes = {
    client: PropTypes.shape({
      id: PropTypes.number.isRequired,
      FIO: PropTypes.shape({
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
      }),
      balance: PropTypes.number.isRequired,
    })
  };

  state = {
    ...this.props.client
  };

  componentWillReceiveProps = (newProps) => {
    const isNewProps = this.state.id !== newProps.client.id ||
      this.state.balance !== newProps.client.balance ||
      this.state.FIO.fam !== newProps.client.FIO.fam ||
      this.state.FIO.im !== newProps.client.FIO.im ||
      this.state.FIO.otch !== newProps.client.FIO.otch;

    if (isNewProps) {
      this.setState({
        ...newProps.client,
        FIO: {
          ...newProps.client.FIO
        },
      });
    }
  };



  delete = (EO) => {
    mobileEvents.emit('EDelete', this.state.id);
  }

  edit = () => {
    mobileEvents.emit('EEdit', this.state);
  }

  render() {

    console.log("MobileClient id=" + this.props.client.id + " render");

    const isActive = this.state.balance > 0;

    return (
      <tr>
        <td>{this.state.FIO.fam}</td>
        <td>{this.state.FIO.im}</td>
        <td>{this.state.FIO.otch}</td>
        <td>{this.state.balance}</td>
        <td style={{ backgroundColor: isActive ? 'chartreuse' : 'red' }} >
          {isActive ? 'Active' : 'Blocked'}
        </td>
        <td><button onClick={this.edit} >Редактировать</button></td>
        <td><button onClick={this.delete}>Удалить</button></td>
      </tr>
    )

  }

}

export default MobileClient;
