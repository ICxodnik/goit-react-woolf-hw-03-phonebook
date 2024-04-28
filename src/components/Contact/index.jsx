import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Contact extends Component {
  static propTypes = { name: PropTypes.string.isRequired };

  render() {
    return <li>{this.props.name}</li>;
  }
}
