import css from 'components/PhoneBook/index.module.css';
import React, { Component } from 'react';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Form from 'components/Form';

export default class PhoneBook extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = user => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, user],
        filter: '',
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
        <Form onSubmit={this.handleSubmit} />
        <Filter onChange={this.handleFilter} value={this.state.filter} />
        <ContactList contacts={this.getFilteredData()} />
      </div>
    );
  }
}
