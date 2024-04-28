import css from 'components/PhoneBook/index.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default class PhoneBook extends Component {
  //   static propTypes = {second: third}
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const user = {
      name: form.elements.name.value,
      number: form.elements.number.value,
      id: nanoid(),
    };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, user],
      };
    });
  };

  handleFilter = value => {
    this.setState({ filter: value });
  };

  getFilteredData() {
    let filter = this.state.filter.toLowerCase().trim();
    if (!filter) {
      return this.state.contacts;
    }
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(filter)
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add Contact</button>
        </form>
        <Filter onChange={this.handleFilter} />
        <ContactList contacts={this.getFilteredData()} />
      </div>
    );
  }
}
