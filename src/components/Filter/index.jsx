import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Filter extends Component {
  static propTypes = { onChange: PropTypes.func.isRequired };

  render() {
    return (
      <input onChange={e => this.props.onChange(e.currentTarget.value)}></input>
    );
  }
}
