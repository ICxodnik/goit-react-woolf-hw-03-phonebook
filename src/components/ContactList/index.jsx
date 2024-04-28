import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Contact from 'components/Contact';

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
        {this.props.contacts.map(el => (
          <Contact key={el.id} name={el.name} />
        ))}
      </ul>
    );
  }
}
