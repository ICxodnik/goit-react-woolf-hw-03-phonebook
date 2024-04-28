import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Contact extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  };

  render() {
    return <li key={this.props.data.id}>{this.props.data.name}</li>;
  }
}
