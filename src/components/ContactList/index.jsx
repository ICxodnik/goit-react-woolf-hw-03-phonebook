import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.string,
      })
    ),
  };

  render() {
    return (
      <ul>
        {this.props.contacts.map(x => (
          <li key={x.id}>{x.name}</li>
        ))}
      </ul>
    );
  }
}
