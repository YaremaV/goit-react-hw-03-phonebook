import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import ContactsList from './components/Contactslist/Contactslist';
import initialContacts from './contacts.json';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import Layout from './components/Layout/Layout';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContacts = (name, number) => {
    const { contacts } = this.state;
    const value = {
      id: uuidv4(),
      name,
      number,
    };

    contacts.some(({ name }) => name.toLowerCase() === value.name.toLowerCase())
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({ contacts: [value, ...contacts] }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filterCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterCase),
    );
  };

  componentDidMount() {
    console.log('App ComponentDidMount');
    const getCont = localStorage.getItem('contacts');
    const parsedCont = JSON.parse(getCont);

    console.log(parsedCont);

    if (parsedCont) {
      this.setState({ getCont: parsedCont });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate APP');
    if (this.state.contacts !== prevState.contacts) {
      console.log('update');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Layout>
        <Form onSubmit={this.addContacts} />

        <Filter value={filter} onHandleFilter={this.changeFilter} />

        <ContactsList
          contacts={filteredContacts}
          onDeleteContacts={this.deleteContact}
        />
      </Layout>
    );
  }
}

export default App;
