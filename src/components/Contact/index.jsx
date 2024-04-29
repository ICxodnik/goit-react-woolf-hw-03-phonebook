import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Contact extends Component {
  static propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  };

  render() {
    return (
      <li>
        {this.props.data.name}: {this.props.data.number}
      </li>
    );
  }
}
